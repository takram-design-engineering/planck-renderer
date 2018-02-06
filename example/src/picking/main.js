// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import * as Three from 'three'
import * as Planck from '@takram/planck-renderer'

let container
let camera
let scene
let renderer
let picking
let pickingRenderTarget

const mouse = new Three.Vector2()
const radius = 500
const frustumSize = 1000
let theta = 0
let previousTarget

function init() {
	const aspect = window.innerWidth / window.innerHeight
	camera = new Three.OrthographicCamera(
    -frustumSize * aspect / 2,
    frustumSize * aspect / 2,
    frustumSize / 2,
    -frustumSize / 2,
    0,
    2000)

	scene = new Three.Scene()
	scene.background = new Three.Color(0xffffff)

  const ambientLight = new Three.AmbientLight(0xffffff, 0.7)
  const directionalLight = new Three.DirectionalLight(0xffffff, 0.4)
	scene.add(ambientLight)
	scene.add(directionalLight)

	const geometry = new Three.BoxBufferGeometry(25, 25, 25)
	for (let i = 0; i < 1000; ++i) {
    const material = new Three.MeshLambertMaterial()
    material.customPickingMaterial = new Planck.PickingMaterial()
    material.customPickingMaterial.identifier = i
		const object = new Three.Mesh(geometry, material)
    object.castShadow = true
    object.receiveShadow = true
		object.position.set(
      Math.random() * 800 - 400,
      Math.random() * 800 - 400,
      Math.random() * 800 - 400)
		object.rotation.set(
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI,
      Math.random() * 2 * Math.PI)
		scene.add(object)
	}

	container = document.createElement('div')
	document.body.appendChild(container)

	renderer = new Planck.Renderer()
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)
	container.appendChild(renderer.domElement)

  picking = new Planck.Picking(renderer)
  pickingRenderTarget = new Three.WebGLRenderTarget(
    window.innerWidth / 4, window.innerHeight / 4, {
      format: Three.RGBAFormat,
    })

	document.addEventListener('mousemove', onDocumentMouseMove, false)
	window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize(event) {
	const aspect = window.innerWidth / window.innerHeight
	camera.left = -frustumSize * aspect / 2
	camera.right = frustumSize * aspect / 2
	camera.top = frustumSize / 2
	camera.bottom = -frustumSize / 2
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
  pickingRenderTarget.setSize(window.innerWidth / 4, window.innerHeight / 4)
}

function onDocumentMouseMove(event) {
	event.preventDefault()
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

function animate() {
	requestAnimationFrame(animate)
	render()
}

function render() {
	theta += 0.1
  camera.position.set(
    radius * Math.sin(Three.Math.degToRad(theta)),
    radius * Math.sin(Three.Math.degToRad(theta)),
    radius * Math.cos(Three.Math.degToRad(theta)))
	camera.lookAt(scene.position)
	renderer.render(scene, camera)
  picking.render(scene, camera, pickingRenderTarget)
  const { target } = picking.pick(pickingRenderTarget, mouse.x, mouse.y)
  if (previousTarget) {
    previousTarget.material.color.setRGB(1, 1, 1)
  }
	if (target) {
    target.material.color.setRGB(0.8, 0, 0)
	}
  previousTarget = target
}

init()
animate()
