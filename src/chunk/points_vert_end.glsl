// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// points_vert.glsl

#include <project_vertex>

#ifdef USE_SIZEATTENUATION
	gl_PointSize = size * (scale / - mvPosition.z);
#else
	gl_PointSize = size;
#endif

#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
#include <shadowmap_vertex>
#include <fog_vertex>
