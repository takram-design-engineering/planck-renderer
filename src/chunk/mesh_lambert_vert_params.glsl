// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// meshlambert_vert.glsl

#define LAMBERT

varying vec3 vLightFront;
#ifdef DOUBLE_SIDED
  varying vec3 vLightBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_params>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
