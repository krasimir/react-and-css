module.exports = {
  entry: './example/src/app.jsx',
  devtool: 'source-map',
  output: {
    path: __dirname + '/example/build',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
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
