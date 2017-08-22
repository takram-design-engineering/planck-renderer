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

import Namespace from '@takram/planck-core/src/Namespace'

import LineBasicMaterial from './LineBasicMaterial'
import PointsMaterial from './PointsMaterial'

export const internal = Namespace('Renderer')

export default class Renderer extends Three.WebGLRenderer {
  constructor(...args) {
    super(...args)
    const scope = internal(this)

    // We're moving render functions to the prototype
    scope.render = this.render.bind(this)
    delete this.render
    scope.renderBufferDirect = this.renderBufferDirect.bind(this)
    delete this.renderBufferDirect
    scope.renderBufferImmediate = this.renderBufferImmediate.bind(this)
    delete this.renderBufferImmediate
  }

  render(scene, camera, renderTarget, forceClear) {
    const scope = internal(this)
    scope.render(scene, camera, renderTarget, forceClear)
  }

  renderBufferDirect(camera, fog, geometry, material, object, group) {
    let pixelRatio
    if (material instanceof LineBasicMaterial ||
        material instanceof PointsMaterial) {
      pixelRatio = material.uniforms.pixelRatio.value
      // eslint-disable-next-line no-param-reassign
      material.uniforms.pixelRatio.value = this.getPixelRatio()
    }
    const scope = internal(this)
    scope.renderBufferDirect(camera, fog, geometry, material, object, group)
    if (material instanceof LineBasicMaterial ||
        material instanceof PointsMaterial) {
      // eslint-disable-next-line no-param-reassign
      material.uniforms.pixelRatio.value = pixelRatio
    }
  }

  renderBufferImmediate(object, program, material) {
    const scope = internal(this)
    scope.renderBufferImmediate(object, program, material)
  }
}
