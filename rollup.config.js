// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import glslify from '@shotamatsuda/rollup-plugin-glslify'
import nodeResolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

const globals = {
  '@takram/planck-core': 'Planck',
  'three': 'THREE'
}

export default {
  input: './src/main.js',
  plugins: [
    glslify(),
    nodeResolve(),
    commonjs(),
    babel({
      presets: [
        ['es2015', { modules: false }],
        'es2016',
        'es2017',
        'stage-3',
        'stage-2'
      ],
      plugins: [
        'external-helpers'
      ],
      babelrc: false
    })
  ],
  external: Object.keys(globals),
  output: [
    {
      globals,
      format: 'umd',
      exports: 'named',
      extend: true,
      name: 'Planck',
      file: pkg.main,
      sourcemap: true
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true
    }
  ]
}
