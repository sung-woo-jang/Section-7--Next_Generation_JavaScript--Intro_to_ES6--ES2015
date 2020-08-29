const path = require('path');
// 현재 폴더의 절대경로

module.exports = {
    entry: './src/js/index.js',
    output: { path: path.resolve(__dirname, 'dist/js'), filename: 'bundle.js' },
};
