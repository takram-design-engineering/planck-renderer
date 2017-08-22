// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// linedashed_frag.glsl

#include <logdepthbuf_fragment>
#include <color_fragment>

outgoingLight = diffuseColor.rgb; // simple shader

gl_FragColor = vec4(outgoingLight, diffuseColor.a);

#include <premultiplied_alpha_fragment>
#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
