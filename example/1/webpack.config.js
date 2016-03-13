module.exports = {
  entry: './src/app.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.js|\.jsx)$/,
        loader: 'cssx-loader',
        exclude: /node_modules/
      }
    ]
  }
}
