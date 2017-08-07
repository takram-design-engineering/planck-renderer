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

export const internal = Namespace('PickingRenderer')

export default class PickingRenderer {
  constructor({ renderer, width, height }) {
    const scope = internal(this)
    scope.renderer = renderer

    // Create an smaller offscreen render target for picking
    const pixelRatio = this.renderer.getPixelRatio()
    const deviceWidth = width * pixelRatio / 4
    const deviceHeight = height * pixelRatio / 4
    this.target = new Three.WebGLRenderTarget(deviceWidth, deviceHeight, {
      minFilter: Three.LinearFilter,
      magFilter: Three.LinearFilter,
      format: Three.RGBAFormat,
      stencilBuffer: false,
    })
  }

  render(scene, camera) {
    const renderer = this.renderer
    renderer.clearDepth()
    renderer.render(scene, camera, this.target)
  }

  resize(width, height) {
    const pixelRatio = this.renderer.getPixelRatio()
    const deviceWidth = width * pixelRatio / 4
    const deviceHeight = height * pixelRatio / 4
    this.target.setSize(deviceWidth, deviceHeight)
  }

  pick(screen) {
    const texture = this.target
    const x = (screen.x + 1) * texture.width / 2
    const y = (screen.y + 1) * texture.height / 2
    const buffer = new Uint8Array(4)
    this.renderer.readRenderTargetPixels(texture, x, y, 1, 1, buffer)
    const identifier = (buffer[0] << 24) |
                       (buffer[1] << 16) |
                       (buffer[2] << 8) |
                       (buffer[3] << 0)
    return identifier
  }

  get renderer() {
    const scope = internal(this)
    return scope.renderer
  }
}
