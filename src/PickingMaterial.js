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

import * as Three from 'three'

import Shader from './Shader'

import fragmentShader from './shader/picking_frag.glsl'
import vertexShader from './shader/picking_vert.glsl'

export default class PickingMaterial extends Three.ShaderMaterial {
  constructor(parameters = {}) {
    super()
    this.setValues(parameters)
    this.fog = false
    this.lights = false
    this.isPickingMaterial = true

    this.uniforms = Three.UniformsUtils.merge([
      Three.UniformsLib.common, {
        identifier: { value: new Three.Vector4() },
      },
    ])
    this.vertexShader = Shader.include(vertexShader)
    this.fragmentShader = Shader.include(fragmentShader)
  }

  get identifier() {
    const uniform = this.uniforms.identifier.value
    return ((((uniform.x * 0xff) & 0xff) << 24) |
            (((uniform.y * 0xff) & 0xff) << 16) |
            (((uniform.z * 0xff) & 0xff) << 8) |
            (((uniform.w * 0xff) & 0xff) << 0)) >>> 0
  }

  set identifier(value) {
    const uniform = this.uniforms.identifier.value
    uniform.x = ((value >>> 24) & 0xff) / 0xff
    uniform.y = ((value >>> 16) & 0xff) / 0xff
    uniform.z = ((value >>> 8) & 0xff) / 0xff
    uniform.w = ((value >>> 0) & 0xff) / 0xff
  }
}
