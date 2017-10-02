// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// depth_vert.glsl

#include <uv_vertex>
#include <skinbase_vertex>
#ifdef USE_DISPLACEMENTMAP
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinnormal_vertex>
#endif
#include <begin_vertex>
