// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// meshlambert_frag.glsl

#include <clipping_planes_fragment>

vec4 diffuseColor = vec4(diffuse, opacity);
ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
vec3 totalEmissiveRadiance = emissive;
