const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/client/main.js",
    // entry:  [
    //     path.resolve(__dirname, './src/client/main.js')
    // ],
    output: {
        file name: "./build/main.js",
    },
    // output: {
    //     path: __dirname + "/build/",
    //     filename: "main.js"
    // },
    devServer: {
         contentBase: "./public/",
         hot: true,
         debug: true
    },
    //devtool: "#inline-source-map",
    devtool: "source-map",
    module: {
        loaders: [
            {
                dev: /\.js|.jsx?$/,
                test: /\.js|.jsx?$/,
                loader: "babel",
                exclude: "node-modules",
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                dev: /\.(jpe?g|png|gif|svg)$/i,
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },

    debug: true
}