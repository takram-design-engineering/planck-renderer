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

import Shaders from './Shaders'

import fragmentShader from './shader/points_frag.glsl'
import vertexShader from './shader/points_vert.glsl'

export default class PointsMaterial extends Three.ShaderMaterial {
  constructor(parameters) {
    super()
    this.color = new Three.Color()
    const source = new Three.PointsMaterial()
    Three.PointsMaterial.prototype.copy.call(this, source)
    source.dispose()
    this.uniforms = Three.UniformsUtils.merge([
      Three.ShaderLib.points.uniforms, {
        pixelRatio: { value: 1 },
        targetPixelRatio: { value: 2 },
      },
    ])
    this.vertexShader = Shaders.include(vertexShader)
    this.fragmentShader = Shaders.include(fragmentShader)
    if (parameters !== undefined) {
      this.setValues(parameters)
    }
  }

  isPointsMaterial() {
    return true
  }
}
