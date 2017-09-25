//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

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
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }],
    }],
  },
  plugins: [
    new CopyWebpackPlugin([{
      context: path.resolve(__dirname, '../node_modules'),
      from: 'babel-polyfill/dist/polyfill.js',
      to: 'lib',
    }, {
      context: path.resolve(__dirname, '../node_modules'),
      from: 'three/build/three.js',
      to: 'lib',
    },
    ...entries.map(name => ({
      from: path.resolve(__dirname, 'src/index.html'),
      to: `${name}/index.html`,
    })),
  ])],
}
