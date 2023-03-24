const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    clean: true
  },
  mode: "development",
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: {
      '@class': path.resolve(__dirname, './src/js/class/'),
      '@scripts': path.resolve(__dirname, './src/js/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
      '@images': path.resolve(__dirname, './public/assets/'),
      '@public': path.resolve(__dirname, './public/'),
      '@hooks': path.resolve(__dirname, './hooks/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@containers': path.resolve(__dirname, './src/containers/'),
      '@database': path.resolve(__dirname, './public/database/'),
      '@api': path.resolve(__dirname, './api'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@context': path.resolve(__dirname, './src/context/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.png|jpg|svg|jpeg|webp$/,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: 'body'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
          {
            from: path.resolve(__dirname, "public", "assets"),
            to: "assets"
          },
          {
            from: path.resolve(__dirname, "public", "audio"),
            to: "audio"
        }
      ]
  }),
  ],
  devServer: {
    historyApiFallback: true
  }

}