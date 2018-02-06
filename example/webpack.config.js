// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const path = require('path')

const directory = path.resolve(__dirname, 'src')
const entries = fs.readdirSync(directory).filter(file => {
  return fs.statSync(path.join(directory, file)).isDirectory()
})

module.exports = {
  entry: entries.reduce((entries, name) => ({
    ...entries,
    [name]: path.resolve(__dirname, `src/${name}/main.js`),
  }), {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/main.js',
  },
  externals: {
    '@takram/planck-renderer': 'Planck',
    'three': 'THREE',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: path.resolve(__dirname, '../node_modules'),
        from: 'babel-polyfill/dist/polyfill.js',
        to: 'lib',
      },
      {
        context: path.resolve(__dirname, '../node_modules'),
        from: 'three/build/three.js',
        to: 'lib',
      },
      ...entries.map(name => ({
        from: path.resolve(__dirname, 'src/index.html'),
        to: `${name}/index.html`,
      })),
    ]),
  ],
}
