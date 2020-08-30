const path = require('path');
// 현재 폴더의 절대경로(이것은 내장 노드 패키지를 사용한 구문)
const htmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
        ],
    },
};
