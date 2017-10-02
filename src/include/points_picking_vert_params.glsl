// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

uniform float size;
uniform float scale;

#include <common>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

uniform vec4 identifier;

attribute float vertexID;

varying vec4 vVertexID;

vec4 decomposeVertexID(float v) {
  float x = floor(v / 16777216.0);
  v -= x * 16777216.0;
  float y = floor(v / 65536.0);
  v -= y * 65536.0;
  float z = floor(v / 256.0);
  v -= z * 256.0;
  return vec4(x, y, z, v);
}

vec4 addVertexID(vec4 v, vec4 id) {
  vec4 r = floor(v * 255.0 + 0.5) + id;
  r.z += floor(r.w / 256.0);
  r.y += floor(r.z / 256.0);
  r.x += floor(r.y / 256.0);
  return mod(r, 256.0);
}
