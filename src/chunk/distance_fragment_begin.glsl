// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// distanceRGBA_frag.glsl

#include <clipping_planes_fragment>

vec4 diffuseColor = vec4(1.0);

#include <map_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>

float dist = length(vWorldPosition - referencePosition);
dist = (dist - nearDistance) / (farDistance - nearDistance);
dist = saturate(dist); // clamp to [0, 1]
