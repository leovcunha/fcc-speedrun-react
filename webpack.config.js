const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

module.exports = (env, argv) => (
    {
    entry: "./index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: argv.mode === "production" ? "/fcc-speedrun-react" : "/"
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    },

    plugins:  [

        new HtmlWebpackPlugin({ // production
            hash: false,
            template: "./index.html",
            filename: path.join(__dirname, "dist", "index.html")
        }),

        new MiniCssExtractPlugin({
            filename:  "[name].css",
            chunkFilename: "[id].css"

        }),

        new UglifyJsPlugin(
        {
             uglifyOptions: {
              output: {
                comments: false,
                beautify: false,
              }
             }
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                     argv.mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets",
                            publicPath: argv.mode === "production" ? "/fcc-speedrun-react/assets" : "/assets"
                        }
                    }
                ]
            },
        ]
    }


});
