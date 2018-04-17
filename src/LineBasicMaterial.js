// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import * as Three from 'three'

import Shader from './Shader'

import fragmentShader from './shader/line_basic_frag.glsl'
import vertexShader from './shader/line_basic_vert.glsl'

export default class LineBasicMaterial extends Three.ShaderMaterial {
  constructor (parameters = {}) {
    super()
    this.color = new Three.Color(0xffffff)
    const source = new Three.LineBasicMaterial()
    Three.LineBasicMaterial.prototype.copy.call(this, source)
    source.dispose()
    this.setValues(parameters)
    this.isLineBasicMaterial = true

    this.uniforms = Three.UniformsUtils.merge([
      Three.UniformsLib.common,
      Three.UniformsLib.fog, {
        pixelRatio: { value: 1 },
        targetPixelRatio: { value: 2 }
      }
    ])
    this.vertexShader = Shader.include(vertexShader)
    this.fragmentShader = Shader.include(fragmentShader)
  }
}
