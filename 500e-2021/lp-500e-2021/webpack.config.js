// const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
// const withReport = process.env.npm_config_withReport;
// const path = require('path');
module.exports = {
  mode: 'production',
  entry: __dirname + '/src/index.js', // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store generated bundle
    filename: 'bundle.js', // Name of generated bundle after build
    //   publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ],
  },
  plugins: [ 
      new BundleAnalyzerPlugin(),
  ],
  // devServer: {  // configuration for webpack-dev-server
  //     contentBase: './src/public',  //source of static assets
  //     port: 7700, // port to run dev-server
  // }
};
