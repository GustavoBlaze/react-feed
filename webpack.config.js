const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /.*\.(gif|png|jpg|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'react-svg-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};
