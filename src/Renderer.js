// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import * as Three from 'three'

import Namespace from '@takram/planck-core/src/Namespace'

export const internal = Namespace('Renderer')

export default class Renderer extends Three.WebGLRenderer {
  constructor (...args) {
    super(...args)
    const scope = internal(this)
    scope.perFrameUniforms = {}
    scope.options = {}
    scope.render = this.render.bind(this)
    scope.renderBufferDirect = this.renderBufferDirect.bind(this)
    scope.renderBufferImmediate = this.renderBufferImmediate.bind(this)
    delete this.render
    delete this.renderBufferDirect
    delete this.renderBufferImmediate
  }

  render (scene, camera, renderTarget, forceClear) {
    const scope = internal(this)
    scope.perFrameUniforms = this.createPerFrameUniforms(scene, camera)
    scope.render(scene, camera, renderTarget, forceClear)
  }

  renderBufferDirect (camera, fog, geometry, material, object, group) {
    const scope = internal(this)
    this.applyPerFrameUniforms(material)
    scope.renderBufferDirect(camera, fog, geometry, material, object, group)
  }

  renderBufferImmediate (object, program, material) {
    const scope = internal(this)
    this.applyPerFrameUniforms(material)
    scope.renderBufferImmediate(object, program, material)
  }

  createPerFrameUniforms (scene, camera) {
    const uniforms = {
      pixelRatio: this.getPixelRatio()
    }
    if (camera.isOrthographicCamera) {
      uniforms.cameraZoom = camera.zoom
    }
    return uniforms
  }

  applyPerFrameUniforms (material) {
    if (!material) {
      return
    }
    const { uniforms } = material
    if (!uniforms) {
      return
    }
    const scope = internal(this)
    const names = Object.keys(scope.perFrameUniforms)
    for (let i = 0; i < names.length; ++i) {
      const name = names[i]
      const uniform = uniforms[name]
      if (uniform) {
        uniform.value = scope.perFrameUniforms[name]
      }
    }
  }

  saveOptions () {
    const scope = internal(this)
    const { options } = scope
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
    options.shadowMapType = this.shadowMap.type
    options.sortObjects = this.sortObjects
    options.toneMapping = this.toneMapping
    options.toneMappingExposure = this.toneMappingExposure
    options.toneMappingWhitePoint = this.toneMappingWhitePoint
  }

  restoreOptions () {
    const scope = internal(this)
    const { options } = scope
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
    this.shadowMap.type = options.shadowMapType
    this.sortObjects = options.sortObjects
    this.toneMapping = options.toneMapping
    this.toneMappingExposure = options.toneMappingExposure
    this.toneMappingWhitePoint = options.toneMappingWhitePoint
  }
}
