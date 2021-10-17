const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config  = require('../src/config.json')

module.exports = {

  entry: './src/app.js',

  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      },

      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset'
      }
      
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      scriptLoading: 'defer',
      template: 'src/index.html',
      minify: false,
      'inject': 'body'
    }),
    new CleanWebpackPlugin()
  ],
  

}