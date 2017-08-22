(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(factory((global.Planck = global.Planck || {}),global.THREE));
}(this, (function (exports,Three) { 'use strict';

var depth_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// depth_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(1.0);\n\n#if DEPTH_PACKING == 3200\n\tdiffuseColor.a = opacity;\n#endif\n";

var depth_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// depth_frag.glsl\n\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\n\n#if DEPTH_PACKING == 3200\n\tgl_FragColor = vec4(vec3(gl_FragCoord.z), opacity);\n#elif DEPTH_PACKING == 3201\n\tgl_FragColor = packDepthToRGBA(gl_FragCoord.z);\n#endif\n";

var depth_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// depth_frag.glsl\n\n#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var depth_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// depth_vert.glsl\n\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n";

var depth_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// depth_vert.glsl\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

var depth_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// depth_vert.glsl\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var distance_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// distanceRGBA_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(1.0);\n\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n\nfloat dist = length(vWorldPosition - referencePosition);\ndist = (dist - nearDistance) / (farDistance - nearDistance);\ndist = saturate(dist); // clamp to [0, 1]\n";

var distance_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// distanceRGBA_frag.glsl\n\ngl_FragColor = packDepthToRGBA(dist);\n";

var distance_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// distanceRGBA_frag.glsl\n\n#define DISTANCE\n\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var distance_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// distanceRGBA_vert.glsl\n\n#include <uv_vertex>\n#include <skinbase_vertex>\n#ifdef USE_DISPLACEMENTMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n#endif\n#include <begin_vertex>\n";

var distance_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// distanceRGBA_vert.glsl\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n\nvWorldPosition = worldPosition.xyz;\n";

var distance_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// distanceRGBA_vert.glsl\n\n#define DISTANCE\n\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var line_basic_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// linedashed_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec3 outgoingLight = vec3(0.0);\nvec4 diffuseColor = vec4(diffuse, opacity);\n";

var line_basic_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// linedashed_frag.glsl\n\n#include <logdepthbuf_fragment>\n#include <color_fragment>\n\noutgoingLight = diffuseColor.rgb; // simple shader\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

var line_basic_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// linedashed_frag.glsl\n\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var line_basic_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// linedashed_vert.glsl\n\n#include <color_vertex>\n#include <begin_vertex>\n";

var line_basic_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// linedashed_vert.glsl\n\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

var line_basic_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// linedashed_vert.glsl\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var mesh_lambert_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// meshlambert_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(diffuse, opacity);\nReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\nvec3 totalEmissiveRadiance = emissive;\n";

var mesh_lambert_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// meshlambert_frag.glsl\n\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <emissivemap_fragment>\n\n// accumulation\nreflectedLight.indirectDiffuse = getAmbientLightIrradiance(ambientLightColor);\n\n#include <lightmap_fragment>\n\nreflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb);\n\n#ifdef DOUBLE_SIDED\n  reflectedLight.directDiffuse = (gl_FrontFacing) ? vLightFront : vLightBack;\n#else\n  reflectedLight.directDiffuse = vLightFront;\n#endif\n\nreflectedLight.directDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb) * getShadowMask();\n\n// modulation\n#include <aomap_fragment>\n\nvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n#include <envmap_fragment>\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n#include <premultiplied_alpha_fragment>\n#include <dithering_fragment>\n";

var mesh_lambert_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// meshlambert_frag.glsl\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n  varying vec3 vLightBack;\n#endif\n\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var mesh_lambert_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// meshlambert_vert.glsl\n\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n";

var mesh_lambert_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// meshlambert_vert.glsl\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <lights_lambert_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n";

var mesh_lambert_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// meshlambert_vert.glsl\n\n#define LAMBERT\n\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n  varying vec3 vLightBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var picking_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n\ngl_FragColor = identifier;\n";

var picking_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <logdepthbuf_fragment>\n";

var picking_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\nuniform vec4 identifier;\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var picking_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <skinbase_vertex>\n#include <begin_vertex>\n";

var picking_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n";

var picking_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var points_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// points_frag.glsl\n\n#include <clipping_planes_fragment>\n\nvec3 outgoingLight = vec3(0.0);\nvec4 diffuseColor = vec4(diffuse, opacity);\n";

var points_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// points_frag.glsl\n\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\n\noutgoingLight = diffuseColor.rgb;\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

var points_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// points_frag.glsl\n\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var points_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// points_vert.glsl\n\n#include <color_vertex>\n#include <begin_vertex>\n";

var points_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// points_vert.glsl\n\n#include <project_vertex>\n\n#ifdef USE_SIZEATTENUATION\n\tgl_PointSize = size * (scale / - mvPosition.z);\n#else\n\tgl_PointSize = size;\n#endif\n\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n";

var points_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n// r87\n// points_vert.glsl\n\nuniform float size;\nuniform float scale;\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

/* eslint-disable camelcase */

var ShaderChunks = {
  depth_fragment_begin: depth_fragment_begin,
  depth_fragment_end: depth_fragment_end,
  depth_fragment_pars: depth_fragment_pars,
  depth_vertex_begin: depth_vertex_begin,
  depth_vertex_end: depth_vertex_end,
  depth_vertex_pars: depth_vertex_pars,
  distance_fragment_begin: distance_fragment_begin,
  distance_fragment_end: distance_fragment_end,
  distance_fragment_pars: distance_fragment_pars,
  distance_vertex_begin: distance_vertex_begin,
  distance_vertex_end: distance_vertex_end,
  distance_vertex_pars: distance_vertex_pars,
  line_basic_fragment_begin: line_basic_fragment_begin,
  line_basic_fragment_end: line_basic_fragment_end,
  line_basic_fragment_pars: line_basic_fragment_pars,
  line_basic_vertex_begin: line_basic_vertex_begin,
  line_basic_vertex_end: line_basic_vertex_end,
  line_basic_vertex_pars: line_basic_vertex_pars,
  mesh_lambert_fragment_begin: mesh_lambert_fragment_begin,
  mesh_lambert_fragment_end: mesh_lambert_fragment_end,
  mesh_lambert_fragment_pars: mesh_lambert_fragment_pars,
  mesh_lambert_vertex_begin: mesh_lambert_vertex_begin,
  mesh_lambert_vertex_end: mesh_lambert_vertex_end,
  mesh_lambert_vertex_pars: mesh_lambert_vertex_pars,
  picking_fragment_begin: picking_fragment_begin,
  picking_fragment_end: picking_fragment_end,
  picking_fragment_pars: picking_fragment_pars,
  picking_vertex_begin: picking_vertex_begin,
  picking_vertex_end: picking_vertex_end,
  picking_vertex_pars: picking_vertex_pars,
  points_fragment_begin: points_fragment_begin,
  points_fragment_end: points_fragment_end,
  points_fragment_pars: points_fragment_pars,
  points_vertex_begin: points_vertex_begin,
  points_vertex_end: points_vertex_end,
  points_vertex_pars: points_vertex_pars
};

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







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

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

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

var Shaders = function () {
  function Shaders() {
    classCallCheck(this, Shaders);
  }

  createClass(Shaders, null, [{
    key: 'include',
    value: function include(source) {
      var _this = this;

      var libraries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ShaderChunks;

      return source.replace(/#include +"([\w\d.]+)"/g, function (match, include) {
        var replace = libraries[include];
        if (replace === undefined) {
          throw new Error('Could not resolve #include "' + include + '"');
        }
        return _this.include(replace);
      });
    }
  }]);
  return Shaders;
}();

var fragmentShader = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"line_basic_fragment_pars\"\n\nuniform float pixelRatio;\nuniform float targetPixelRatio;\n\nvoid main() {\n  #include \"line_basic_fragment_begin\"\n\n  diffuseColor.a *= pixelRatio / targetPixelRatio;\n\n  #include \"line_basic_fragment_end\"\n}\n";

var vertexShader = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"line_basic_vertex_pars\"\n\nvoid main() {\n  #include \"line_basic_vertex_begin\"\n  #include \"line_basic_vertex_end\"\n}\n";

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

var LineBasicMaterial$1 = function (_Three$ShaderMaterial) {
  inherits(LineBasicMaterial$$1, _Three$ShaderMaterial);

  function LineBasicMaterial$$1(parameters) {
    classCallCheck(this, LineBasicMaterial$$1);

    var _this = possibleConstructorReturn(this, (LineBasicMaterial$$1.__proto__ || Object.getPrototypeOf(LineBasicMaterial$$1)).call(this));

    _this.color = new Three.Color();
    var source = new Three.LineBasicMaterial();
    Three.LineBasicMaterial.prototype.copy.call(_this, source);
    source.dispose();
    _this.uniforms = Three.UniformsUtils.merge([Three.UniformsLib.common, Three.UniformsLib.fog, {
      pixelRatio: { value: 1 },
      targetPixelRatio: { value: 2 }
    }]);
    _this.vertexShader = Shaders.include(vertexShader);
    _this.fragmentShader = Shaders.include(fragmentShader);
    if (parameters !== undefined) {
      _this.setValues(parameters);
    }
    return _this;
  }

  createClass(LineBasicMaterial$$1, [{
    key: 'isLineBasicMaterial',
    value: function isLineBasicMaterial() {
      return true;
    }
  }]);
  return LineBasicMaterial$$1;
}(Three.ShaderMaterial);

var fragmentShader$1 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"picking_fragment_pars\"\n\nvoid main() {\n  #include \"picking_fragment_begin\"\n  #include \"picking_fragment_end\"\n}\n";

var vertexShader$1 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"picking_vertex_pars\"\n\nvoid main() {\n  #include \"picking_vertex_begin\"\n  #include \"picking_vertex_end\"\n}\n";

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

var PickingMaterial = function (_Three$ShaderMaterial) {
  inherits(PickingMaterial, _Three$ShaderMaterial);

  function PickingMaterial() {
    classCallCheck(this, PickingMaterial);

    var _this = possibleConstructorReturn(this, (PickingMaterial.__proto__ || Object.getPrototypeOf(PickingMaterial)).call(this));

    _this.uniforms = Three.UniformsUtils.merge([Three.UniformsLib.common, {
      identifier: { value: new Three.Vector4() }
    }]);
    _this.vertexShader = Shaders.include(vertexShader$1);
    _this.fragmentShader = Shaders.include(fragmentShader$1);
    return _this;
  }

  createClass(PickingMaterial, [{
    key: 'isPickingMaterial',
    value: function isPickingMaterial() {
      return true;
    }
  }, {
    key: 'identifier',
    get: function get$$1() {
      var uniform = this.uniforms.identifier.value;
      return (uniform & 0xff) << 24 | (uniform & 0xff) << 16 | (uniform & 0xff) << 8 | (uniform & 0xff) << 0;
    },
    set: function set$$1(value) {
      var uniform = this.uniforms.identifier.value;
      uniform.x = (value >>> 24 & 0xff) / 255.0;
      uniform.y = (value >>> 16 & 0xff) / 255.0;
      uniform.z = (value >>> 8 & 0xff) / 255.0;
      uniform.w = (value >>> 0 & 0xff) / 255.0;
    }
  }]);
  return PickingMaterial;
}(Three.ShaderMaterial);

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

function Namespace() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  var symbol = Symbol(name);
  return function namespace(object) {
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (data) {
      return data;
    };

    if (object[symbol] === undefined) {
      // eslint-disable-next-line no-param-reassign
      object[symbol] = init({});
    }
    return object[symbol];
  };
}

var fragmentShader$2 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"points_fragment_pars\"\n\nvoid main() {\n  #include \"points_fragment_begin\"\n  #include \"points_fragment_end\"\n}\n";

var vertexShader$2 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"points_vertex_pars\"\n\nvoid main() {\n  #include \"points_vertex_begin\"\n  #include \"points_vertex_end\"\n}\n";

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

var PointsMaterial$1 = function (_Three$ShaderMaterial) {
  inherits(PointsMaterial$$1, _Three$ShaderMaterial);

  function PointsMaterial$$1(parameters) {
    classCallCheck(this, PointsMaterial$$1);

    var _this = possibleConstructorReturn(this, (PointsMaterial$$1.__proto__ || Object.getPrototypeOf(PointsMaterial$$1)).call(this));

    _this.color = new Three.Color();
    var source = new Three.PointsMaterial();
    Three.PointsMaterial.prototype.copy.call(_this, source);
    source.dispose();
    _this.uniforms = Three.UniformsUtils.merge([Three.ShaderLib.points.uniforms, {
      pixelRatio: { value: 1 },
      targetPixelRatio: { value: 2 }
    }]);
    _this.vertexShader = Shaders.include(vertexShader$2);
    _this.fragmentShader = Shaders.include(fragmentShader$2);
    if (parameters !== undefined) {
      _this.setValues(parameters);
    }
    return _this;
  }

  createClass(PointsMaterial$$1, [{
    key: 'isPointsMaterial',
    value: function isPointsMaterial() {
      return true;
    }
  }]);
  return PointsMaterial$$1;
}(Three.ShaderMaterial);

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

var internal$1 = Namespace('Renderer');

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

    // We're moving renderBufferDirect to the prototype
    scope.renderBufferDirect = _this.renderBufferDirect.bind(_this);
    delete _this.renderBufferDirect;
    return _this;
  }

  createClass(Renderer, [{
    key: 'renderBufferDirect',
    value: function renderBufferDirect(camera, fog, geometry, material, object, group) {
      var pixelRatio = void 0;
      if (material instanceof LineBasicMaterial$1 || material instanceof PointsMaterial$1) {
        pixelRatio = material.uniforms.pixelRatio.value;
        // eslint-disable-next-line no-param-reassign
        material.uniforms.pixelRatio.value = this.getPixelRatio();
      }
      var scope = internal$1(this);
      scope.renderBufferDirect(camera, fog, geometry, material, object, group);
      if (material instanceof LineBasicMaterial$1 || material instanceof PointsMaterial$1) {
        // eslint-disable-next-line no-param-reassign
        material.uniforms.pixelRatio.value = pixelRatio;
      }
    }
  }]);
  return Renderer;
}(Three.WebGLRenderer);

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//



var PickingRenderer = function (_Renderer) {
  inherits(PickingRenderer, _Renderer);

  function PickingRenderer() {
    classCallCheck(this, PickingRenderer);
    return possibleConstructorReturn(this, (PickingRenderer.__proto__ || Object.getPrototypeOf(PickingRenderer)).apply(this, arguments));
  }

  createClass(PickingRenderer, [{
    key: 'pick',
    value: function pick(renderTarget, x, y) {
      var pixelX = (x + 1) * renderTarget.width / 2;
      var pixelY = (y + 1) * renderTarget.height / 2;
      var buffer = new Uint8Array(4);
      this.readRenderTargetPixels(renderTarget, pixelX, pixelY, 1, 1, buffer);
      return buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3] << 0;
    }
  }, {
    key: 'renderBufferDirect',
    value: function renderBufferDirect(camera, fog, geometry, originalMaterial, object, group) {
      var material = object.customPickingMaterial;
      if (!material) {
        material = new PickingMaterial();
        material.identifier = object.identifier;
        object.customPickingMaterial = material;
      }
      if (!material.isPickingMaterial) {
        return; // Abort
      }
      get(PickingRenderer.prototype.__proto__ || Object.getPrototypeOf(PickingRenderer.prototype), 'renderBufferDirect', this).call(this, camera, fog, geometry, material, object, group);
    }
  }]);
  return PickingRenderer;
}(Renderer);

//
//  The MIT License
//
//  Copyright (C) 2016-Present Shota Matsuda
//
//  Permission is hereby granted, free of charge, to any person obtaining a
//  copy of this software and associated documentation files (the "Software"),
//  to deal in the Software without restriction, including without limitation
//  the rights to use, copy, modify, merge, publish, distribute, sublicense,
//  and/or sell copies of the Software, and to permit persons to whom the
//  Software is furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in
//  all copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
//  DEALINGS IN THE SOFTWARE.
//

exports.LineBasicMaterial = LineBasicMaterial$1;
exports.PickingMaterial = PickingMaterial;
exports.PickingRenderer = PickingRenderer;
exports.PointsMaterial = PointsMaterial$1;
exports.Renderer = Renderer;
exports.ShaderChunks = ShaderChunks;
exports.Shaders = Shaders;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=planck-renderer.js.map
