require('babel-polyfill');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  entry: ['babel-polyfill','./src/index.js'],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.css/,
      loader: 'style!css',
    }, {
      test: /\.json$/,
      loader: 'json',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'es2015',
          'react',
          'stage-0'
        ]
      },
    },{
      test: /\.png$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.jpg$/,
      loader: 'file-loader'
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'src/config.js' }
    ]),
  ]
};
