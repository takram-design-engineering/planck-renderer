// The MIT License
// Copyright (C) 2010-2017 three.js authors
// Copyright (C) 2016-Present Shota Matsuda

// r87
// meshlambert_frag.glsl

#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <specularmap_fragment>
#include <emissivemap_fragment>

// accumulation
reflectedLight.indirectDiffuse = getAmbientLightIrradiance(ambientLightColor);

#include <lightmap_fragment>

reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb);

#ifdef DOUBLE_SIDED
  reflectedLight.directDiffuse = (gl_FrontFacing) ? vLightFront : vLightBack;
#else
  reflectedLight.directDiffuse = vLightFront;
#endif

reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb) * getShadowMask();

// modulation
#include <aomap_fragment>

vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

#include <envmap_fragment>

gl_FragColor = vec4(outgoingLight, diffuseColor.a);

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
