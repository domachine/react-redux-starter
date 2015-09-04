module.exports = {
  entry: './app/app.js',
  output: {
    path: 'public',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.sass$/, loader: 'style!css!sass?indentedSyntax'},
      {test: /\.(png|jpg)$/, loader: 'url?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  }
};
