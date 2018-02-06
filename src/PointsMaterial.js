// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import * as Three from 'three'

import Shader from './Shader'

import fragmentShader from './shader/points_frag.glsl'
import vertexShader from './shader/points_vert.glsl'

export default class PointsMaterial extends Three.ShaderMaterial {
  constructor(parameters = {}) {
    super()
    this.color = new Three.Color(0xffffff)
    const source = new Three.PointsMaterial()
    Three.PointsMaterial.prototype.copy.call(this, source)
    source.dispose()
    this.setValues(parameters)
    this.isPointsMaterial = true

    this.uniforms = Three.UniformsUtils.merge([
      Three.ShaderLib.points.uniforms,
    ])
    this.vertexShader = Shader.include(vertexShader)
    this.fragmentShader = Shader.include(fragmentShader)
  }
}
