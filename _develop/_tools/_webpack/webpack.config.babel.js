import path from 'path';
import webpack from 'webpack';

const CopyPlugin = require('copy-webpack-plugin');

const devOutputPath = path.resolve(__dirname, '../../../dist/');

const config = {
  entry: {
    index: './js/index.js',
  },
  output: {
    path: devOutputPath,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js'
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    })
  ],
};

export default config;
