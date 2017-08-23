// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// distanceRGBA_vert.glsl

#define DISTANCE

varying vec4 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
