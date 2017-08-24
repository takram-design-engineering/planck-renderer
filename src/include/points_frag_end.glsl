// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// points_frag.glsl

#include <logdepthbuf_fragment>
#include <map_particle_fragment>
#include <color_fragment>
#include <alphatest_fragment>

outgoingLight = diffuseColor.rgb;

gl_FragColor = vec4(outgoingLight, diffuseColor.a);

#include <premultiplied_alpha_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
