const webpack = require('webpack');
const path = require('path');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';


    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js'
        },

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader', 'css-loader', 'sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
                },
                { 
                    test: /\.(png|woff|woff2|eot|ttf|svg)$/i, 
                    use: [
                        {
                            loader: 'url-loader?limit=100000'
                        }
                    ]
                    
                }
            ]
        }
    }
    return config;
}