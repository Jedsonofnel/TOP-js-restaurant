const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Project",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                ],
                include: /\.module\.css$/i,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/i,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(png|jpe?g|webp|tiff)$/i,
                use: [
                    {
                        loader: "webpack-image-resize-loader",
                        options: {
                            width: 500,
                            height: 500,
                            fit: "inside",
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [["mozjpeg", { quality: 85 }]],
                    },
                },
                generator: [
                    {
                        preset: "webp",
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: ["imagemin-webp"],
                        },
                    },
                ],
            }),
        ],
    },
}
