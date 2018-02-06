// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import glslify from '@shotamatsuda/rollup-plugin-glslify'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: './dist/planck-renderer.module.js',
  sourcemap: true,
  plugins: [
    glslify(),
    nodeResolve({ browser: true }),
    commonjs(),
    babel({
      presets: [
        ['es2015', { modules: false }],
        'es2016',
        'es2017',
        'stage-3',
      ],
      plugins: [
        'external-helpers',
      ],
      babelrc: false,
    }),
  ],
  external: [
    'three',
  ],
  globals: {
    'three': 'THREE',
  },
  output: [
    {
      format: 'umd',
      extend: true,
      name: 'Planck',
      file: './dist/planck-renderer.js',
    },
  ],
}
