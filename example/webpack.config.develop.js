// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

const config = require('./webpack.config')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(config, {
  devServer: {
    contentBase: path.resolve(__dirname, '..'),
    publicPath: '/example',
    hot: true,
    inline: true,
    port: 3000,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
