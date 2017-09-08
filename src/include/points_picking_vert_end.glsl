// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

#include <project_vertex>

#ifdef USE_SIZEATTENUATION
  gl_PointSize = size * (scale / -mvPosition.z);
#else
  gl_PointSize = size;
#endif

{
  // Add 1 to distinguish points draw or not
  vec4 v = decomposeVertexID(vertexID + 1.0);
  vVertexID = addVertexID(identifier, v) / 255.0;
}

#include <logdepthbuf_vertex>
#include <clipping_planes_vertex>
#include <worldpos_vertex>
