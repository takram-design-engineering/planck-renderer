// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// depth_frag.glsl

#include <clipping_planes_fragment>

vec4 diffuseColor = vec4(1.0);

#if DEPTH_PACKING == 3200
	diffuseColor.a = opacity;
#endif
