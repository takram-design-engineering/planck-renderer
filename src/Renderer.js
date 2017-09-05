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

export const internal = Namespace('Renderer')

export default class Renderer extends Three.WebGLRenderer {
  constructor(...args) {
    super(...args)
    const scope = internal(this)
    scope.framewiseUniforms = {}
    scope.options = {}
    scope.render = this.render.bind(this)
    scope.renderBufferDirect = this.renderBufferDirect.bind(this)
    scope.renderBufferImmediate = this.renderBufferImmediate.bind(this)
    delete this.render
    delete this.renderBufferDirect
    delete this.renderBufferImmediate
  }

  render(scene, camera, renderTarget, forceClear) {
    const scope = internal(this)
    scope.framewiseUniforms = this.createFramewiseUniforms(scene, camera)
    scope.render(scene, camera, renderTarget, forceClear)
  }

  renderBufferDirect(camera, fog, geometry, material, object, group) {
    const scope = internal(this)
    this.applyFramewiseUniforms(material)
    scope.renderBufferDirect(camera, fog, geometry, material, object, group)
  }

  renderBufferImmediate(object, program, material) {
    const scope = internal(this)
    this.applyFramewiseUniforms(material)
    scope.renderBufferImmediate(object, program, material)
  }

  createFramewiseUniforms(scene, camera) {
    return {
      cameraZoom: camera.zoom || 1,
      pixelRatio: this.getPixelRatio(),
    }
  }

  applyFramewiseUniforms(material) {
    if (!material) {
      return
    }
    const uniforms = material.uniforms
    if (!uniforms) {
      return
    }
    const scope = internal(this)
    const names = Object.keys(scope.framewiseUniforms)
    for (let i = 0; i < names.length; ++i) {
      const uniform = uniforms[name]
      if (uniform) {
        uniform.value = scope.framewiseUniforms[name]
      }
    }
  }

  saveOptions() {
    const scope = internal(this)
    const options = scope.options
  	options.autoClear = this.autoClear
  	options.autoClearColor = this.autoClearColor
  	options.autoClearDepth = this.autoClearDepth
  	options.autoClearStencil = this.autoClearStencil
  	options.clippingPlanes = this.clippingPlanes
  	options.gammaFactor = this.gammaFactor
  	options.gammaInput = this.gammaInput
  	options.gammaOutput = this.gammaOutput
  	options.localClippingEnabled = this.localClippingEnabled
  	options.maxMorphNormals = this.maxMorphNormals
  	options.maxMorphTargets = this.maxMorphTargets
  	options.physicallyCorrectLights = this.physicallyCorrectLights
  	options.shadowMapEnabled = this.shadowMap.enabled
  	options.shadowMapRenderReverseSided = this.shadowMap.renderReverseSided
  	options.shadowMapRenderSingleSided = this.shadowMap.renderSingleSided
  	options.shadowMapType = this.shadowMap.type
  	options.sortObjects = this.sortObjects
  	options.toneMapping = this.toneMapping
  	options.toneMappingExposure = this.toneMappingExposure
  	options.toneMappingWhitePoint = this.toneMappingWhitePoint
  }

  restoreOptions() {
    const scope = internal(this)
    const options = scope.options
    this.autoClear = options.autoClear
    this.autoClearColor = options.autoClearColor
    this.autoClearDepth = options.autoClearDepth
    this.autoClearStencil = options.autoClearStencil
    this.clippingPlanes = options.clippingPlanes
    this.gammaFactor = options.gammaFactor
    this.gammaInput = options.gammaInput
    this.gammaOutput = options.gammaOutput
    this.localClippingEnabled = options.localClippingEnabled
    this.maxMorphNormals = options.maxMorphNormals
    this.maxMorphTargets = options.maxMorphTargets
    this.physicallyCorrectLights = options.physicallyCorrectLights
    this.shadowMap.enabled = options.shadowMapEnabled
    this.shadowMap.renderReverseSided = options.shadowMapRenderReverseSided
    this.shadowMap.renderSingleSided = options.shadowMapRenderSingleSided
    this.shadowMap.type = options.shadowMapType
    this.sortObjects = options.sortObjects
    this.toneMapping = options.toneMapping
    this.toneMappingExposure = options.toneMappingExposure
    this.toneMappingWhitePoint = options.toneMappingWhitePoint
  }
}
