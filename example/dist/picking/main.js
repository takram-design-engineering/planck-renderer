/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _three = __webpack_require__(1);

var Three = _interopRequireWildcard(_three);

var _planckRenderer = __webpack_require__(2);

var Planck = _interopRequireWildcard(_planckRenderer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

var container = void 0;
var camera = void 0;
var scene = void 0;
var renderer = void 0;
var picking = void 0;
var pickingRenderTarget = void 0;

var mouse = new Three.Vector2();
var radius = 500;
var frustumSize = 1000;
var theta = 0;
var previousTarget = void 0;

function init() {
	var aspect = window.innerWidth / window.innerHeight;
	camera = new Three.OrthographicCamera(frustumSize * aspect / -2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 0, 2000);

	scene = new Three.Scene();
	scene.background = new Three.Color(0xffffff);

	var ambientLight = new Three.AmbientLight(0xffffff, 0.7);
	var directionalLight = new Three.DirectionalLight(0xffffff, 0.4);
	scene.add(ambientLight);
	scene.add(directionalLight);

	var geometry = new Three.BoxBufferGeometry(25, 25, 25);
	for (var i = 0; i < 1000; ++i) {
		var material = new Three.MeshLambertMaterial();
		material.customPickingMaterial = new Planck.PickingMaterial();
		material.customPickingMaterial.identifier = i;
		var object = new Three.Mesh(geometry, material);
		object.castShadow = true;
		object.receiveShadow = true;
		object.position.set(Math.random() * 800 - 400, Math.random() * 800 - 400, Math.random() * 800 - 400);
		object.rotation.set(Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI, Math.random() * 2 * Math.PI);
		scene.add(object);
	}

	container = document.createElement('div');
	document.body.appendChild(container);

	renderer = new Planck.Renderer();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	picking = new Planck.Picking(renderer);
	pickingRenderTarget = new Three.WebGLRenderTarget(window.innerWidth / 4, window.innerHeight / 4, {
		format: Three.RGBAFormat
	});

	document.addEventListener('mousemove', onDocumentMouseMove, false);
	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize(event) {
	var aspect = window.innerWidth / window.innerHeight;
	camera.left = -frustumSize * aspect / 2;
	camera.right = frustumSize * aspect / 2;
	camera.top = frustumSize / 2;
	camera.bottom = -frustumSize / 2;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	pickingRenderTarget.setSize(window.innerWidth / 4, window.innerHeight / 4);
}

function onDocumentMouseMove(event) {
	event.preventDefault();
	mouse.x = event.clientX / window.innerWidth * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
	requestAnimationFrame(animate);
	render();
}

function render() {
	theta += 0.1;
	camera.position.set(radius * Math.sin(Three.Math.degToRad(theta)), radius * Math.sin(Three.Math.degToRad(theta)), radius * Math.cos(Three.Math.degToRad(theta)));
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
	picking.render(scene, camera, pickingRenderTarget);

	var _picking$pick = picking.pick(pickingRenderTarget, mouse.x, mouse.y),
	    target = _picking$pick.target;

	if (previousTarget) {
		previousTarget.material.color.setRGB(1, 1, 1);
	}
	if (target) {
		target.material.color.setRGB(0.8, 0, 0);
	}
	previousTarget = target;
}

init();
animate();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = THREE;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = Planck;

/***/ })
/******/ ]);