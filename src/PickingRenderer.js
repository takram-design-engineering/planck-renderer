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

import LinePickingMaterial from './LinePickingMaterial'
import MeshPickingMaterial from './MeshPickingMaterial'
import Renderer from './Renderer'

const linePickingMaterial = new LinePickingMaterial()
const meshPickingMaterial = new MeshPickingMaterial()

export const internal = Namespace('PickingRenderer')

export default class PickingRenderer extends Renderer {
  pick(renderTarget, x, y) {
    const pixelX = (x + 1) * renderTarget.width / 2
    const pixelY = (y + 1) * renderTarget.height / 2
    const buffer = new Uint8Array(4)
    this.readRenderTargetPixels(renderTarget, pixelX, pixelY, 1, 1, buffer)
    return (buffer[0] << 24) |
           (buffer[1] << 16) |
           (buffer[2] << 8) |
           (buffer[3] << 0)
  }

  renderBufferDirect(camera, fog, geometry, originalMaterial, object, group) {
    let material = object.customPickingMaterial
    if (!material) {
      if (object.isMesh) {
        material = meshPickingMaterial
      } else if (object.isLine) {
        material = linePickingMaterial
      } else {
        return // Abort
      }
    }
    if (!material.isPickingMaterial) {
      return // Abort
    }
    super.renderBufferDirect(camera, fog, geometry, material, object, group)
  }
}
