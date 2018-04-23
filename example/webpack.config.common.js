// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const directory = path.resolve(__dirname, 'src')
const entries = fs.readdirSync(directory).filter(file => {
  return fs.statSync(path.join(directory, file)).isDirectory()
})

module.exports = mode => ({
  mode: 'development',
  entry: entries.reduce((entries, name) => ({
    ...entries,
    [name]: [
      'babel-polyfill',
      path.resolve(__dirname, `src/${name}/main.js`)
    ]
  }), {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/main.js'
  },
  externals: {
    'three': 'THREE'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'es2015',
                'es2016',
                'es2017',
                'stage-3',
                'stage-2'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.browser': JSON.stringify(true)
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname)
    }),
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, '../node_modules'),
        from: 'three/build/three.js',
        to: 'lib'
      },
      ...entries.map(name => ({
        from: path.resolve(__dirname, 'src/index.html'),
        to: `${name}/index.html`
      }))
    ])
  ]
})
