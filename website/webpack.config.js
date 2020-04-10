const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve('js', 'index.js'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '..',
        port: 8000
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: path.resolve('images'), 
                to: path.resolve('..', 'images')
        }]),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};