// The MIT License
// Copyright (C) 2010-2018 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r92
// depth_frag.glsl

#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <logdepthbuf_fragment>

#if DEPTH_PACKING == 3200
  gl_FragColor = vec4(vec3(1.0 - gl_FragCoord.z), opacity);
#elif DEPTH_PACKING == 3201
  gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
#endif
