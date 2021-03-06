// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import * as Three from 'three'

import { Namespace } from '@takram/planck-core'

import PickingMaterial from './PickingMaterial'

export const internal = Namespace('Picking')

export default class Picking {
  constructor (renderer) {
    const scope = internal(this)
    scope.renderer = renderer
    scope.buffer = new Uint8Array(4)
    scope.objects = {}
    scope.material = new PickingMaterial()
    scope.materialPool = [scope.material]
    scope.materialIndex = 0

    // Configurable layers to test against objects
    this.layers = new Three.Layers()
    this.renderBufferDirect = this.renderBufferDirect.bind(this)
  }

  get renderer () {
    return internal(this).renderer
  }

  pick (renderTarget, x, y) {
    const scope = internal(this)
    const { buffer } = scope
    const pixelX = (x + 1) * renderTarget.width / 2
    const pixelY = (y + 1) * renderTarget.height / 2
    this.renderer.readRenderTargetPixels(
      renderTarget, pixelX, pixelY,
      1, 1, buffer
    )

    // An identifier should always be unsigned
    const identifier = ((buffer[0] << 24) |
                        (buffer[1] << 16) |
                        (buffer[2] << 8) |
                        (buffer[3] << 0)) >>> 0

    const { objects } = scope
    let targetIdentifier = identifier
    let target = objects[targetIdentifier]

    // The target must be one of instanced object's instances when it's not
    // found while its identifier is non-zero
    if (identifier !== 0 && !target) {
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

  render (scene, camera, renderTarget, forceClear) {
    const { renderer } = this
    renderer.saveOptions()
    renderer.autoClear = true
    renderer.gammaInput = false
    renderer.gammaOutput = false
    renderer.shadowMap.enabled = false
    renderer.toneMapping = Three.NoToneMapping

    // Reset states for this frame
    const scope = internal(this)
    scope.objects = {}
    scope.materialIndex = 0
    scope.nextIdentifier = 1

    // Swap camera's layers with picking layers
    const { layers } = camera
    camera.layers = this.layers

    // Render the scene using our render buffer direct
    renderer.renderBufferDirect = this.renderBufferDirect
    renderer.render(scene, camera, renderTarget, forceClear)
    delete renderer.renderBufferDirect

    // Restore camera's layers we've swapped above
    camera.layers = layers

    // Sentinel value for finding in ranges when picking
    scope.objects[scope.nextIdentifier] = null

    // Restore renderer's parameters we've changed above
    renderer.restoreOptions()
  }

  renderBufferDirect (camera, fog, geometry, mat, object, group) {
    const scope = internal(this)

    // Prefer using object's custom picking material
    let material = object.customPickingMaterial
    if (!material) {
      // Allocating a new material seems to require an additional memory for
      // storing its shader string, and leaks, even when we clone it, which
      // must share its WebGLProgram
      material = scope.materialPool[scope.materialIndex++]
      if (!material) {
        material = scope.material.clone()
        scope.materialPool.push(material)
      }

      // Respect some of the options that affect the visibility of object
      material.depthTest = object.material.depthTest
      material.depthWrite = object.material.depthWrite
      material.polygonOffset = object.material.polygonOffset
      material.polygonOffsetFactor = object.material.polygonOffsetFactor
      material.polygonOffsetUnits = object.material.polygonOffsetUnits
    }

    const identifier = scope.nextIdentifier
    material.identifier = identifier
    scope.objects[identifier] = object
    scope.nextIdentifier += object.identifierLength || 1

    // Call the original render buffer direct
    const { renderer } = this
    renderer.constructor.prototype.renderBufferDirect.apply(renderer, [
      camera, fog, geometry, material, object, group
    ])
  }
}
