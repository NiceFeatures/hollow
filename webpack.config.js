const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "bundle.js",
        clean: true,
        assetModuleFilename: 'assets/[name][ext]'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, "docs")
        },
        port: 8080,
        compress: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: 'styles.css'})
    ],
    mode: "development",
    target: "web"
}