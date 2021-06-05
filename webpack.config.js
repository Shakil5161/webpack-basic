const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development", 
    module: {      // loader
        rules: [
            {
                //bable loader
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ['@babel/plugin-proposal-object-rest-spread']
                        }
                    }
                ]
            },
            {
                //css loader
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                "css-loader"]
            },
            {
                //html loader
            },
            {
                //file loader
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ 
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
  ], 
}