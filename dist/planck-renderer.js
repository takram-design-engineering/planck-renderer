(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three'), require('@takram/planck-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'three', '@takram/planck-core'], factory) :
  (factory((global.Planck = global.Planck || {}),global.THREE,global.Planck));
}(this, (function (exports,Three,planckCore) { 'use strict';

  var depth_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// depth_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(1.0);\n\n#if DEPTH_PACKING == 3200\n  diffuseColor.a = opacity;\n#endif\n";

  var depth_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// depth_frag.glsl\n\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\n\n#if DEPTH_PACKING == 3200\n  gl_FragColor = vec4(vec3(gl_FragCoord.z), opacity);\n#elif DEPTH_PACKING == 3201\n  gl_FragColor = packDepthToRGBA(gl_FragCoord.z);\n#endif\n";

  var depth_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// depth_frag.glsl\n\n#if DEPTH_PACKING == 3200\n  uniform float opacity;\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

  var depth_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// depth_vert.glsl\n\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n";

  var depth_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// depth_vert.glsl\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

  var depth_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// depth_vert.glsl\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

  var distance_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// distanceRGBA_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(1.0);\n\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n\nfloat dist = length(vWorldPosition - referencePosition);\ndist = (dist - nearDistance) / (farDistance - nearDistance);\ndist = saturate(dist); // clamp to [0, 1]\n";

  var distance_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// distanceRGBA_frag.glsl\n\ngl_FragColor = packDepthToRGBA(dist);\n";

  var distance_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// distanceRGBA_frag.glsl\n\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

  var distance_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// distanceRGBA_vert.glsl\n\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n";

  var distance_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// distanceRGBA_vert.glsl\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n\nvWorldPosition = worldPosition.xyz;\n";

  var distance_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// distanceRGBA_vert.glsl\n\n#define DISTANCE\n\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

  var line_basic_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// linedashed_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec3 outgoingLight = vec3(0.0);\nvec4 diffuseColor = vec4(diffuse, opacity);\n";

  var line_basic_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// linedashed_frag.glsl\n\n#include <logdepthbuf_fragment>\n#include <color_fragment>\n\noutgoingLight = diffuseColor.rgb; // simple shader\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

  var line_basic_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// linedashed_frag.glsl\n\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

  var line_basic_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// linedashed_vert.glsl\n\n#include <color_vertex>\n#include <begin_vertex>\n";

  var line_basic_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// linedashed_vert.glsl\n\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

  var line_basic_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// linedashed_vert.glsl\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

  var mesh_lambert_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// meshlambert_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(diffuse, opacity);\nReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\nvec3 totalEmissiveRadiance = emissive;\n";

  var mesh_lambert_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// meshlambert_frag.glsl\n\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <emissivemap_fragment>\n\n// accumulation\nreflectedLight.indirectDiffuse = getAmbientLightIrradiance(ambientLightColor);\n\n#include <lightmap_fragment>\n\nreflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb);\n\n#ifdef DOUBLE_SIDED\n  reflectedLight.directDiffuse = (gl_FrontFacing) ? vLightFront : vLightBack;\n#else\n  reflectedLight.directDiffuse = vLightFront;\n#endif\n\nreflectedLight.directDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb) * getShadowMask();\n\n// modulation\n#include <aomap_fragment>\n\nvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n#include <envmap_fragment>\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n";

  var mesh_lambert_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// meshlambert_frag.glsl\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n  varying vec3 vLightBack;\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

  var mesh_lambert_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// meshlambert_vert.glsl\n\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n";

  var mesh_lambert_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// meshlambert_vert.glsl\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <lights_lambert_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n";

  var mesh_lambert_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// meshlambert_vert.glsl\n\n#define LAMBERT\n\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n  varying vec3 vLightBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

  var picking_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <clipping_planes_fragment>\n\ngl_FragColor = identifier;\n";

  var picking_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <logdepthbuf_fragment>\n";

  var picking_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\nuniform vec4 identifier;\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

  var picking_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <skinbase_vertex>\n#include <begin_vertex>\n";

  var picking_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n";

  var picking_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

  var points_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// points_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec3 outgoingLight = vec3(0.0);\nvec4 diffuseColor = vec4(diffuse, opacity);\n";

  var points_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// points_frag.glsl\n\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\n\noutgoingLight = diffuseColor.rgb;\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

  var points_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// points_frag.glsl\n\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

  var points_picking_frag_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <clipping_planes_fragment>\n\ngl_FragColor = vVertexID;\n";

  var points_picking_frag_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <logdepthbuf_fragment>\n";

  var points_picking_frag_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvarying vec4 vVertexID;\n";

  var points_picking_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <begin_vertex>\n";

  var points_picking_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <project_vertex>\n\n#ifdef USE_SIZEATTENUATION\n  gl_PointSize = size * (scale / -mvPosition.z);\n#else\n  gl_PointSize = size;\n#endif\n\n{\n  // Add 1 to distinguish points draw or not\n  vec4 v = decomposeVertexID(vertexID + 1.0);\n  vVertexID = addVertexID(identifier, v) / 255.0;\n}\n\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n";

  var points_picking_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nuniform vec4 identifier;\n\nattribute float vertexID;\n\nvarying vec4 vVertexID;\n\nvec4 decomposeVertexID(float v) {\n  float x = floor(v / 16777216.0);\n  v -= x * 16777216.0;\n  float y = floor(v / 65536.0);\n  v -= y * 65536.0;\n  float z = floor(v / 256.0);\n  v -= z * 256.0;\n  return vec4(x, y, z, v);\n}\n\nvec4 addVertexID(vec4 v, vec4 id) {\n  vec4 r = floor(v * 255.0 + 0.5) + id;\n  r.z += floor(r.w / 256.0);\n  r.y += floor(r.z / 256.0);\n  r.x += floor(r.y / 256.0);\n  return mod(r, 256.0);\n}\n";

  var points_vert_begin = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// points_vert.glsl\n\n#include <color_vertex>\n#include <begin_vertex>\n";

  var points_vert_end = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// points_vert.glsl\n\n#include <project_vertex>\n\n#ifdef USE_SIZEATTENUATION\n  gl_PointSize = size * (scale / -mvPosition.z);\n#else\n  gl_PointSize = size;\n#endif\n\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n";

  var points_vert_params = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2010-2017 three.js authors\n// Copyright (C) 2016-Present Shota Matsuda\n\n// r87\n// points_vert.glsl\n\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

  // The MIT License

  var ShaderLib = {
    depth_frag_begin: depth_frag_begin,
    depth_frag_end: depth_frag_end,
    depth_frag_params: depth_frag_params,
    depth_vert_begin: depth_vert_begin,
    depth_vert_end: depth_vert_end,
    depth_vert_params: depth_vert_params,
    distance_frag_begin: distance_frag_begin,
    distance_frag_end: distance_frag_end,
    distance_frag_params: distance_frag_params,
    distance_vert_begin: distance_vert_begin,
    distance_vert_end: distance_vert_end,
    distance_vert_params: distance_vert_params,
    line_basic_frag_begin: line_basic_frag_begin,
    line_basic_frag_end: line_basic_frag_end,
    line_basic_frag_params: line_basic_frag_params,
    line_basic_vert_begin: line_basic_vert_begin,
    line_basic_vert_end: line_basic_vert_end,
    line_basic_vert_params: line_basic_vert_params,
    mesh_lambert_frag_begin: mesh_lambert_frag_begin,
    mesh_lambert_frag_end: mesh_lambert_frag_end,
    mesh_lambert_frag_params: mesh_lambert_frag_params,
    mesh_lambert_vert_begin: mesh_lambert_vert_begin,
    mesh_lambert_vert_end: mesh_lambert_vert_end,
    mesh_lambert_vert_params: mesh_lambert_vert_params,
    picking_frag_begin: picking_frag_begin,
    picking_frag_end: picking_frag_end,
    picking_frag_params: picking_frag_params,
    picking_vert_begin: picking_vert_begin,
    picking_vert_end: picking_vert_end,
    picking_vert_params: picking_vert_params,
    points_frag_begin: points_frag_begin,
    points_frag_end: points_frag_end,
    points_frag_params: points_frag_params,
    points_picking_frag_begin: points_picking_frag_begin,
    points_picking_frag_end: points_picking_frag_end,
    points_picking_frag_params: points_picking_frag_params,
    points_picking_vert_begin: points_picking_vert_begin,
    points_picking_vert_end: points_picking_vert_end,
    points_picking_vert_params: points_picking_vert_params,
    points_vert_begin: points_vert_begin,
    points_vert_end: points_vert_end,
    points_vert_params: points_vert_params
  };

  // The MIT License

  function includeShader(source) {
    var includes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ShaderLib;
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'planck/';

    var pattern = new RegExp('#include +<' + path + '([\\w\\d.]+)>', 'g');
    var replace = function replace(match, id) {
      var source = includes[id];
      if (source === undefined) {
        throw new Error('Could not resolve #include <' + path + id + '>');
      }
      return source.replace(pattern, replace);
    };
    return source.replace(pattern, replace);
  }

  var Shader = {
    include: includeShader
  };

  var fragmentShader = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/line_basic_frag_params>\n\nuniform float pixelRatio;\nuniform float targetPixelRatio;\n\nvoid main() {\n  #include <planck/line_basic_frag_begin>\n\n  diffuseColor.a *= pixelRatio / targetPixelRatio;\n\n  #include <planck/line_basic_frag_end>\n}\n";

  var vertexShader = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/line_basic_vert_params>\n\nvoid main() {\n  #include <planck/line_basic_vert_begin>\n  #include <planck/line_basic_vert_end>\n}\n";

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  // The MIT License

  var LineBasicMaterial = function (_Three$ShaderMaterial) {
    inherits(LineBasicMaterial, _Three$ShaderMaterial);

    function LineBasicMaterial() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, LineBasicMaterial);

      var _this = possibleConstructorReturn(this, (LineBasicMaterial.__proto__ || Object.getPrototypeOf(LineBasicMaterial)).call(this));

      _this.color = new Three.Color(0xffffff);
      var source = new Three.LineBasicMaterial();
      Three.LineBasicMaterial.prototype.copy.call(_this, source);
      source.dispose();
      _this.setValues(parameters);
      _this.isLineBasicMaterial = true;

      _this.uniforms = Three.UniformsUtils.merge([Three.UniformsLib.common, Three.UniformsLib.fog, {
        pixelRatio: { value: 1 },
        targetPixelRatio: { value: 2 }
      }]);
      _this.vertexShader = includeShader(vertexShader);
      _this.fragmentShader = includeShader(fragmentShader);
      return _this;
    }

    return LineBasicMaterial;
  }(Three.ShaderMaterial);

  var fragmentShader$1 = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/picking_frag_params>\n\nvoid main() {\n  #include <planck/picking_frag_begin>\n  #include <planck/picking_frag_end>\n}\n";

  var vertexShader$1 = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/picking_vert_params>\n\nvoid main() {\n  #include <planck/picking_vert_begin>\n  #include <planck/picking_vert_end>\n}\n";

  // The MIT License

  var PickingMaterial = function (_Three$ShaderMaterial) {
    inherits(PickingMaterial, _Three$ShaderMaterial);

    function PickingMaterial() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, PickingMaterial);

      var _this = possibleConstructorReturn(this, (PickingMaterial.__proto__ || Object.getPrototypeOf(PickingMaterial)).call(this));

      _this.setValues(parameters);
      _this.fog = false;
      _this.lights = false;
      _this.isPickingMaterial = true;

      _this.uniforms = Three.UniformsUtils.merge([Three.UniformsLib.common, {
        identifier: { value: new Three.Vector4() }
      }]);
      _this.vertexShader = includeShader(vertexShader$1);
      _this.fragmentShader = includeShader(fragmentShader$1);
      return _this;
    }

    createClass(PickingMaterial, [{
      key: 'identifier',
      get: function get$$1() {
        var uniform = this.uniforms.identifier.value;
        return ((uniform.x * 0xff & 0xff) << 24 | (uniform.y * 0xff & 0xff) << 16 | (uniform.z * 0xff & 0xff) << 8 | (uniform.w * 0xff & 0xff) << 0) >>> 0;
      },
      set: function set$$1(value) {
        var uniform = this.uniforms.identifier.value;
        uniform.x = (value >>> 24 & 0xff) / 0xff;
        uniform.y = (value >>> 16 & 0xff) / 0xff;
        uniform.z = (value >>> 8 & 0xff) / 0xff;
        uniform.w = (value >>> 0 & 0xff) / 0xff;
      }
    }]);
    return PickingMaterial;
  }(Three.ShaderMaterial);

  // The MIT License

  var internal = planckCore.Namespace('Picking');

  var Picking = function () {
    function Picking(renderer) {
      classCallCheck(this, Picking);

      var scope = internal(this);
      scope.renderer = renderer;
      scope.buffer = new Uint8Array(4);
      scope.objects = {};
      scope.material = new PickingMaterial();
      scope.materialPool = [scope.material];
      scope.materialIndex = 0;

      // Configurable layers to test against objects
      this.layers = new Three.Layers();
      this.renderBufferDirect = this.renderBufferDirect.bind(this);
    }

    createClass(Picking, [{
      key: 'pick',
      value: function pick(renderTarget, x, y) {
        var scope = internal(this);
        var buffer = scope.buffer;

        var pixelX = (x + 1) * renderTarget.width / 2;
        var pixelY = (y + 1) * renderTarget.height / 2;
        this.renderer.readRenderTargetPixels(renderTarget, pixelX, pixelY, 1, 1, buffer);

        // An identifier should always be unsigned
        var identifier = (buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3] << 0) >>> 0;

        var objects = scope.objects;

        var targetIdentifier = identifier;
        var target = objects[targetIdentifier];

        // The target must be one of instanced object's instances when it's not
        // found while its identifier is non-zero
        if (identifier !== 0 && !target) {
          var identifiers = Object.keys(objects);
          for (var index = 0; index < identifiers.length; ++index) {
            if (identifiers[index] > identifier - 1) {
              targetIdentifier = +identifiers[index - 1];
              target = objects[targetIdentifier];
              break;
            }
          }
        }
        return { identifier: identifier, target: target, targetIdentifier: targetIdentifier };
      }
    }, {
      key: 'render',
      value: function render(scene, camera, renderTarget, forceClear) {
        var renderer = this.renderer;

        renderer.saveOptions();
        renderer.autoClear = true;
        renderer.gammaInput = false;
        renderer.gammaOutput = false;
        renderer.shadowMap.enabled = false;
        renderer.toneMapping = Three.NoToneMapping;

        // Reset states for this frame
        var scope = internal(this);
        scope.objects = {};
        scope.materialIndex = 0;
        scope.nextIdentifier = 1;

        // Swap camera's layers with picking layers
        var layers = camera.layers;

        camera.layers = this.layers;

        // Render the scene using our render buffer direct
        renderer.renderBufferDirect = this.renderBufferDirect;
        renderer.render(scene, camera, renderTarget, forceClear);
        delete renderer.renderBufferDirect;

        // Restore camera's layers we've swapped above
        camera.layers = layers;

        // Sentinel value for finding in ranges when picking
        scope.objects[scope.nextIdentifier] = null;

        // Restore renderer's parameters we've changed above
        renderer.restoreOptions();
      }
    }, {
      key: 'renderBufferDirect',
      value: function renderBufferDirect(camera, fog, geometry, mat, object, group) {
        var scope = internal(this);

        // Prefer using object's custom picking material
        var material = object.customPickingMaterial;
        if (!material) {
          // Allocating a new material seems to require an additional memory for
          // storing its shader string, and leaks, even when we clone it, which
          // must share its WebGLProgram
          material = scope.materialPool[scope.materialIndex++];
          if (!material) {
            material = scope.material.clone();
            scope.materialPool.push(material);
          }

          // Respect some of the options that affect the visibility of object
          material.depthTest = object.material.depthTest;
          material.depthWrite = object.material.depthWrite;
          material.polygonOffset = object.material.polygonOffset;
          material.polygonOffsetFactor = object.material.polygonOffsetFactor;
          material.polygonOffsetUnits = object.material.polygonOffsetUnits;
        }

        var identifier = scope.nextIdentifier;
        material.identifier = identifier;
        scope.objects[identifier] = object;
        scope.nextIdentifier += object.identifierLength || 1;

        // Call the original render buffer direct
        var renderer = this.renderer;

        renderer.constructor.prototype.renderBufferDirect.apply(renderer, [camera, fog, geometry, material, object, group]);
      }
    }, {
      key: 'renderer',
      get: function get$$1() {
        return internal(this).renderer;
      }
    }]);
    return Picking;
  }();

  var fragmentShader$2 = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/points_frag_params>\n\nvoid main() {\n  #include <planck/points_frag_begin>\n  #include <planck/points_frag_end>\n}\n";

  var vertexShader$2 = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/points_vert_params>\n\nvoid main() {\n  #include <planck/points_vert_begin>\n  #include <planck/points_vert_end>\n}\n";

  // The MIT License

  var PointsMaterial = function (_Three$ShaderMaterial) {
    inherits(PointsMaterial, _Three$ShaderMaterial);

    function PointsMaterial() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, PointsMaterial);

      var _this = possibleConstructorReturn(this, (PointsMaterial.__proto__ || Object.getPrototypeOf(PointsMaterial)).call(this));

      _this.color = new Three.Color(0xffffff);
      var source = new Three.PointsMaterial();
      Three.PointsMaterial.prototype.copy.call(_this, source);
      source.dispose();
      _this.setValues(parameters);
      _this.isPointsMaterial = true;

      _this.uniforms = Three.UniformsUtils.merge([Three.ShaderLib.points.uniforms]);
      _this.vertexShader = includeShader(vertexShader$2);
      _this.fragmentShader = includeShader(fragmentShader$2);
      return _this;
    }

    return PointsMaterial;
  }(Three.ShaderMaterial);

  var fragmentShader$3 = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/points_picking_frag_params>\n\nvoid main() {\n  #include <planck/points_picking_frag_begin>\n  #include <planck/points_picking_frag_end>\n}\n";

  var vertexShader$3 = "#define GLSLIFY 1\n// The MIT License\n// Copyright (C) 2016-Present Shota Matsuda\n\n#include <planck/points_picking_vert_params>\n\nvoid main() {\n  #include <planck/points_picking_vert_begin>\n  #include <planck/points_picking_vert_end>\n}\n";

  // The MIT License

  var PointsPickingMaterial = function (_Three$ShaderMaterial) {
    inherits(PointsPickingMaterial, _Three$ShaderMaterial);

    function PointsPickingMaterial() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, PointsPickingMaterial);

      var _this = possibleConstructorReturn(this, (PointsPickingMaterial.__proto__ || Object.getPrototypeOf(PointsPickingMaterial)).call(this));

      _this.color = new Three.Color(0xffffff);
      var source = new Three.PointsMaterial();
      Three.PointsMaterial.prototype.copy.call(_this, source);
      source.dispose();
      delete _this.color;
      _this.setValues(parameters);
      _this.fog = false;
      _this.lights = false;
      _this.isPointsMaterial = true;
      _this.isPickingMaterial = true;

      _this.uniforms = Three.UniformsUtils.merge([Three.ShaderLib.points.uniforms, {
        identifier: { value: new Three.Vector4() }
      }]);
      _this.vertexShader = includeShader(vertexShader$3);
      _this.fragmentShader = includeShader(fragmentShader$3);
      return _this;
    }

    createClass(PointsPickingMaterial, [{
      key: 'identifier',
      get: function get$$1() {
        var uniform = this.uniforms.identifier.value;
        return ((uniform.x * 0xff & 0xff) << 24 | (uniform.y * 0xff & 0xff) << 16 | (uniform.z * 0xff & 0xff) << 8 | (uniform.w * 0xff & 0xff) << 0) >>> 0;
      },
      set: function set$$1(value) {
        var uniform = this.uniforms.identifier.value;
        uniform.x = (value >>> 24 & 0xff) / 0xff;
        uniform.y = (value >>> 16 & 0xff) / 0xff;
        uniform.z = (value >>> 8 & 0xff) / 0xff;
        uniform.w = (value >>> 0 & 0xff) / 0xff;
      }
    }]);
    return PointsPickingMaterial;
  }(Three.ShaderMaterial);

  // The MIT License

  var internal$1 = planckCore.Namespace('Renderer');

  var Renderer = function (_Three$WebGLRenderer) {
    inherits(Renderer, _Three$WebGLRenderer);

    function Renderer() {
      var _ref;

      classCallCheck(this, Renderer);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = possibleConstructorReturn(this, (_ref = Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call.apply(_ref, [this].concat(args)));

      var scope = internal$1(_this);
      scope.perFrameUniforms = {};
      scope.options = {};
      scope.render = _this.render.bind(_this);
      scope.renderBufferDirect = _this.renderBufferDirect.bind(_this);
      scope.renderBufferImmediate = _this.renderBufferImmediate.bind(_this);
      delete _this.render;
      delete _this.renderBufferDirect;
      delete _this.renderBufferImmediate;
      return _this;
    }

    createClass(Renderer, [{
      key: 'render',
      value: function render(scene, camera, renderTarget, forceClear) {
        var scope = internal$1(this);
        scope.perFrameUniforms = this.createPerFrameUniforms(scene, camera);
        scope.render(scene, camera, renderTarget, forceClear);
      }
    }, {
      key: 'renderBufferDirect',
      value: function renderBufferDirect(camera, fog, geometry, material, object, group) {
        var scope = internal$1(this);
        this.applyPerFrameUniforms(material);
        scope.renderBufferDirect(camera, fog, geometry, material, object, group);
      }
    }, {
      key: 'renderBufferImmediate',
      value: function renderBufferImmediate(object, program, material) {
        var scope = internal$1(this);
        this.applyPerFrameUniforms(material);
        scope.renderBufferImmediate(object, program, material);
      }
    }, {
      key: 'createPerFrameUniforms',
      value: function createPerFrameUniforms(scene, camera) {
        var uniforms = {
          pixelRatio: this.getPixelRatio()
        };
        if (camera.isOrthographicCamera) {
          uniforms.cameraZoom = camera.zoom;
        }
        return uniforms;
      }
    }, {
      key: 'applyPerFrameUniforms',
      value: function applyPerFrameUniforms(material) {
        if (!material) {
          return;
        }
        var uniforms = material.uniforms;

        if (!uniforms) {
          return;
        }
        var scope = internal$1(this);
        var names = Object.keys(scope.perFrameUniforms);
        for (var i = 0; i < names.length; ++i) {
          var name = names[i];
          var uniform = uniforms[name];
          if (uniform) {
            uniform.value = scope.perFrameUniforms[name];
          }
        }
      }
    }, {
      key: 'saveOptions',
      value: function saveOptions() {
        var _internal = internal$1(this),
            options = _internal.options;

        options.autoClear = this.autoClear;
        options.autoClearColor = this.autoClearColor;
        options.autoClearDepth = this.autoClearDepth;
        options.autoClearStencil = this.autoClearStencil;
        options.clippingPlanes = this.clippingPlanes;
        options.gammaFactor = this.gammaFactor;
        options.gammaInput = this.gammaInput;
        options.gammaOutput = this.gammaOutput;
        options.localClippingEnabled = this.localClippingEnabled;
        options.maxMorphNormals = this.maxMorphNormals;
        options.maxMorphTargets = this.maxMorphTargets;
        options.physicallyCorrectLights = this.physicallyCorrectLights;
        options.shadowMapEnabled = this.shadowMap.enabled;
        options.shadowMapType = this.shadowMap.type;
        options.sortObjects = this.sortObjects;
        options.toneMapping = this.toneMapping;
        options.toneMappingExposure = this.toneMappingExposure;
        options.toneMappingWhitePoint = this.toneMappingWhitePoint;
      }
    }, {
      key: 'restoreOptions',
      value: function restoreOptions() {
        var _internal2 = internal$1(this),
            options = _internal2.options;

        this.autoClear = options.autoClear;
        this.autoClearColor = options.autoClearColor;
        this.autoClearDepth = options.autoClearDepth;
        this.autoClearStencil = options.autoClearStencil;
        this.clippingPlanes = options.clippingPlanes;
        this.gammaFactor = options.gammaFactor;
        this.gammaInput = options.gammaInput;
        this.gammaOutput = options.gammaOutput;
        this.localClippingEnabled = options.localClippingEnabled;
        this.maxMorphNormals = options.maxMorphNormals;
        this.maxMorphTargets = options.maxMorphTargets;
        this.physicallyCorrectLights = options.physicallyCorrectLights;
        this.shadowMap.enabled = options.shadowMapEnabled;
        this.shadowMap.type = options.shadowMapType;
        this.sortObjects = options.sortObjects;
        this.toneMapping = options.toneMapping;
        this.toneMappingExposure = options.toneMappingExposure;
        this.toneMappingWhitePoint = options.toneMappingWhitePoint;
      }
    }]);
    return Renderer;
  }(Three.WebGLRenderer);

  // The MIT License

  var main = {
    LineBasicMaterial: LineBasicMaterial,
    Picking: Picking,
    PickingMaterial: PickingMaterial,
    PointsMaterial: PointsMaterial,
    PointsPickingMaterial: PointsPickingMaterial,
    Renderer: Renderer,
    Shader: Shader,
    ShaderLib: ShaderLib
  };

  exports.LineBasicMaterial = LineBasicMaterial;
  exports.Picking = Picking;
  exports.PickingMaterial = PickingMaterial;
  exports.PointsMaterial = PointsMaterial;
  exports.PointsPickingMaterial = PointsPickingMaterial;
  exports.Renderer = Renderer;
  exports.Shader = Shader;
  exports.ShaderLib = ShaderLib;
  exports.default = main;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=planck-renderer.js.map
