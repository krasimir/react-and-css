const babelLoaderConfig = require('./babel.js');

module.exports = {
  entry: './src/CSSX.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: 'CSSX.js',
    libraryTarget: 'umd'
  },
  externals: {
      'react': 'react'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: require.resolve('babel-loader'),
        query: babelLoaderConfig,
      }
    ]
  }
}
