const path = require('path');
module.exports = {
  entry: {
    'app': './main.tsx',
    'home': './Home.tsx',
    'about': './About.tsx',
    'contact': './contact.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
    ]
  },
  externals: {
    apprun: 'apprun'
  },
  devServer: {
    open: true
  },
  devtool: 'source-map'
}