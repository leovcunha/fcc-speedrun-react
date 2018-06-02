const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",

    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true
    },

    plugins: [

        new HtmlWebpackPlugin({ // production
            hash: false,
            template: "./index.html",
            filename: path.join(__dirname, "docs", "index.html")
        })
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
                    "style-loader", // creates style nodes from JS strings
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
                            publicPath: "/assets"
                        }
                    }
                ]
            },
        ]
    }


};
