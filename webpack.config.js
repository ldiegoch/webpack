const webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        referrals: './src/referrals.js',
        econsults: './src/econsults.js',
        //vendor: ["jquery","lodash","babel-polyfill"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].[hash].bundle.js',
        chunckFilename: "[id].[hash].chunk.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            filename: "commons.[hash].js",
            name: "commons"
        }),
        new HtmlWebpackPlugin({
            filename: 'app.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'referrals.html',
            chunks: ['referrals','commons']
        }),
        new HtmlWebpackPlugin({
            filename: 'econsults.html',
            chunks: ['econsults','commons']
        })
    ]
};