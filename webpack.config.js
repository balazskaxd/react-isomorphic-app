const webpack = require('webpack');
const path = require('path');

const paths = {
  CLIENT_ENTRY: path.join(__dirname, 'src', 'client', 'client.js'),
  CLIENT_OUTPUT: path.join(__dirname, 'src', 'server', 'static', 'js')
};

module.exports = {
  devtool: 'eval',
  entry: {
    main: paths.CLIENT_ENTRY,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: paths.CLIENT_OUTPUT,
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|src\/server)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
    new webpack.NoErrorsPlugin()
  ]
};
