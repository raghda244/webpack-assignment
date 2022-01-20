const pathModule = require('path')
const htmlPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: pathModule.resolve(__dirname, "build"),
        filename: "bundle.js",
        assetModuleFilename: 'images/[name][ext]'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "styles.css", }),
        new CssMinimizerPlugin(),
        new htmlPlugin(),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['mozjpeg', { quality: 60 }],
                    ['optipng', { optimizationLevel: 5 }],
                ],
            },
        }),
    ],

}