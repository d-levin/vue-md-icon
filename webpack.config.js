const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const config = {
  output: {
    path: path.resolve(`${__dirname}/dist`),
  },
  stats: {
    modules: false,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  externals: {
    'material-design-icons': 'material-design-icons',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false,
      },
    }),
  ],
};

module.exports = [
  webpackMerge(config, {
    entry: path.resolve(`${__dirname}/src/plugin.js`),
    output: {
      filename: 'v-icon.min.js',
      libraryTarget: 'window',
      library: 'VIcon',
    },
  }),
  webpackMerge(config, {
    entry: path.resolve(`${__dirname}/src/VIcon.vue`),
    output: {
      filename: 'v-icon.js',
      libraryTarget: 'umd',
      library: 'v-icon',
      umdNamedDefine: true,
    },
  }),
];
