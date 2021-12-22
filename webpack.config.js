const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');
const sourcePath = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: buildPath,
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[a|c]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: sourcePath + '/index.html',
            filename: 'index.html',
        }),
    ],
    resolve: {
        alias: {
            '@': sourcePath,
        },
        extensions: ['.js'],
    },
    devServer: {
        static: {
            directory: buildPath,
        },
        compress: true,
        port: 9000,
    },
};
