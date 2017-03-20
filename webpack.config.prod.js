import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: true,
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, 'src/index'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundled.js',
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules /, loaders: ['babel'] },
      { test: /\.css$/, loaders: ['style', 'css'] },
    ],
  },
};
