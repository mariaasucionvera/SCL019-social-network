const HTMLwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/index.html'
        })
    ]
}