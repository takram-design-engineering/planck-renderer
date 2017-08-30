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

import PickingMaterial from './PickingMaterial'
import Renderer from './Renderer'

export const internal = Namespace('PickingRenderer')

export default class PickingRenderer extends Renderer {
  constructor(...args) {
    super(...args)
    const scope = internal(this)
    scope.objects = {}
    scope.material = new PickingMaterial()
    scope.materialPool = [scope.material]
    scope.materialIndex = 0

    // Configurable layers to test against objects
    this.layers = new Three.Layers()
  }

  pick(renderTarget, x, y) {
    const pixelX = (x + 1) * renderTarget.width / 2
    const pixelY = (y + 1) * renderTarget.height / 2
    const buffer = new Uint8Array(4)
    this.readRenderTargetPixels(renderTarget, pixelX, pixelY, 1, 1, buffer)
    const identifier = ((buffer[0] << 24) |
                        (buffer[1] << 16) |
                        (buffer[2] << 8) |
                        (buffer[3] << 0)) >>> 0
    const scope = internal(this)
    const { objects } = scope
    let targetIdentifier = identifier
    let target = objects[targetIdentifier]
    if (targetIdentifier !== 0 && !target) {
      const identifiers = Object.keys(objects)
      for (let index = 0; index < identifiers.length; ++index) {
        if (identifiers[index] > identifier - 1) {
          targetIdentifier = +identifiers[index - 1]
          target = objects[targetIdentifier]
          break
        }
      }
    }
    return { identifier, target, targetIdentifier }
  }

  render(scene, camera, renderTarget, forceClear) {
    const scope = internal(this)
    scope.objects = {}
    scope.materialIndex = 0
    scope.nextIdentifier = 1

    // Swap camera's layers with picking layers
    const layers = camera.layers
    camera.layers = this.layers // eslint-disable-line no-param-reassign
    super.render(scene, camera, renderTarget, forceClear)
    camera.layers = layers // eslint-disable-line no-param-reassign

    // Sentinel value for finding in ranges when picking
    scope.objects[scope.nextIdentifier] = null
  }

  renderBufferDirect(camera, fog, geometry, _, object, group) {
    const scope = internal(this)
    let material = object.customPickingMaterial
    if (!material) {
      material = scope.materialPool[scope.materialIndex++]
      if (!material) {
        material = scope.material.clone()
        scope.materialPool.push(material)
      }
      material.depthTest = object.material.depthTest
      material.depthWrite = object.material.depthWrite
    }
    const identifier = scope.nextIdentifier
    material.identifier = identifier
    scope.objects[identifier] = object
    scope.nextIdentifier += object.identifierLength || 1
    super.renderBufferDirect(camera, fog, geometry, material, object, group)
  }
}
