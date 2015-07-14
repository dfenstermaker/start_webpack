var webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path');

module.exports = {
  entry: {
    index: './src/index',
    styles: './src/main'
  },

  output: {
    path: __dirname + "/build",
    filename: '[name].js'
  },

  module: {
    loaders: [{
        test: /[\/]angular\.js$/,
        loader: "exports?angular"
      },

      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "ng-annotate!babel"
      },

      {
        test: /\.html$/,
        exclude: [/node_modules/],
        loader: "html"
      },

      {
        test: /main\.scss$/,
        loader: "style!css!sass?outputStyle=expanded"
      }

    ],

    // Put paths to files in here which are already packaged for production, such as vendor
    // libs that have been minimized already. This is going to bypass any checks on our end
    noParse: []
  },

  resolve: {
    // what kind of files types do we except? this will auto check for only these file types
    // against your path
    extensions: ['', '.js', '.json', '.scss'],
    // The directories to look in
    modulesDirectories: ['node_modules', 'src'],
    // create a shortend name for something used everywhere, like our main module
    alias: {
      module: 'module.js'
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Start Webpack',
      template: 'index.html',
      inject: true
    })
  ],

  port: 3002

  // create and inject source maps on our build
  // devtool: 'source-map'
}
