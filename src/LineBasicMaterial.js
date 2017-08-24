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

import fragmentShader from './shader/line_basic_frag.glsl'
import vertexShader from './shader/line_basic_vert.glsl'

export default class LineBasicMaterial extends Three.ShaderMaterial {
  constructor(parameters = {}) {
    super()
    const source = new Three.LineBasicMaterial()
    Three.LineBasicMaterial.prototype.copy.call(this, source)
    source.dispose()
    this.setValues(parameters)

    this.uniforms = Three.UniformsUtils.merge([
      Three.UniformsLib.common,
      Three.UniformsLib.fog, {
        pixelRatio: { value: 1 },
        targetPixelRatio: { value: 2 },
      },
    ])
    this.vertexShader = Shader.include(vertexShader)
    this.fragmentShader = Shader.include(fragmentShader)
  }

  isLineBasicMaterial() {
    return true
  }
}
