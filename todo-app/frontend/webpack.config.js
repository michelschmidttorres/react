const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path')

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.jsx") },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /.js[x]?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
            resolve: {
                extensions: [".js", ".jsx"],
            },
        }, 
        {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            use: 'file-loader'
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.js$/,
            enforce: 'pre',
            use: ['source-map-loader'],
        }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ linkType: 'text/css' }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        }),
        //Allows remove/clean the build folder
        new CleanWebpackPlugin(),
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 8080,
        contentBase: '/public',
        hot: true,
        historyApiFallback: true
    },
}