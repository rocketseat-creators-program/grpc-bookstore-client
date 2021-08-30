const path = require('path')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
