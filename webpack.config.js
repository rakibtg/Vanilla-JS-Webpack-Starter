const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    entry: __dirname + '/src/app.js'
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9300,
    watchContentBase: true
  }
}