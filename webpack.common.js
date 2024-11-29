const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: '.src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // style-loader css-loader
            },
            // {
            //     test: /\.html$/i,
            //     use: "html-loader", // html-loader -> only for local paths in html <img>
            // },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                use: "asset/resource",
            },
        ],
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

};
