// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// distanceRGBA_frag.glsl

#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
