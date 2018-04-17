// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import * as Three from 'three'

import { includeShader } from './Shader'

import fragmentShader from './shader/points_picking_frag.glsl'
import vertexShader from './shader/points_picking_vert.glsl'

export default class PointsPickingMaterial extends Three.ShaderMaterial {
  constructor (parameters = {}) {
    super()
    this.color = new Three.Color(0xffffff)
    const source = new Three.PointsMaterial()
    Three.PointsMaterial.prototype.copy.call(this, source)
    source.dispose()
    delete this.color
    this.setValues(parameters)
    this.fog = false
    this.lights = false
    this.isPointsMaterial = true
    this.isPickingMaterial = true

    this.uniforms = Three.UniformsUtils.merge([
      Three.ShaderLib.points.uniforms, {
        identifier: { value: new Three.Vector4() }
      }
    ])
    this.vertexShader = includeShader(vertexShader)
    this.fragmentShader = includeShader(fragmentShader)
  }

  get identifier () {
    const uniform = this.uniforms.identifier.value
    return ((((uniform.x * 0xff) & 0xff) << 24) |
            (((uniform.y * 0xff) & 0xff) << 16) |
            (((uniform.z * 0xff) & 0xff) << 8) |
            (((uniform.w * 0xff) & 0xff) << 0)) >>> 0
  }

  set identifier (value) {
    const uniform = this.uniforms.identifier.value
    uniform.x = ((value >>> 24) & 0xff) / 0xff
    uniform.y = ((value >>> 16) & 0xff) / 0xff
    uniform.z = ((value >>> 8) & 0xff) / 0xff
    uniform.w = ((value >>> 0) & 0xff) / 0xff
  }
}
