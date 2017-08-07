(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('three')) :
	typeof define === 'function' && define.amd ? define(['exports', 'three'], factory) :
	(factory((global.Planck = global.Planck || {}),global.THREE));
}(this, (function (exports,Three) { 'use strict';

var depth_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n\nvec4 diffuseColor = vec4(1.0);\n\n#if DEPTH_PACKING == 3200\n\tdiffuseColor.a = opacity;\n#endif\n";

var depth_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <map_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <logdepthbuf_fragment>\n\n#if DEPTH_PACKING == 3200\n\tgl_FragColor = vec4(vec3(gl_FragCoord.z), opacity);\n#elif DEPTH_PACKING == 3201\n\tgl_FragColor = packDepthToRGBA(gl_FragCoord.z);\n#endif\n";

var depth_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var depth_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <uv_vertex>\n#include <skinbase_vertex>\n#include <begin_vertex>\n";

var depth_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <displacementmap_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

var depth_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var distance_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n";

var distance_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\ngl_FragColor = packDepthToRGBA(length(vWorldPosition.xyz - lightPos.xyz) / 1000.0);\n";

var distance_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\nuniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\n";

var distance_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <skinbase_vertex>\n#include <begin_vertex>\n";

var distance_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n\nvWorldPosition = worldPosition;\n";

var distance_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\nvarying vec4 vWorldPosition;\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var linebasic_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n\nvec3 outgoingLight = vec3(0.0);\nvec4 diffuseColor = vec4(diffuse, opacity);\n";

var linebasic_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <logdepthbuf_fragment>\n#include <color_fragment>\n\noutgoingLight = diffuseColor.rgb; // simple shader\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

var linebasic_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\nuniform vec3 diffuse;\nuniform float opacity;\n\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var linebasic_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <color_vertex>\n#include <begin_vertex>\n";

var linebasic_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

var linebasic_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var linepicking_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n";

var linepicking_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <logdepthbuf_fragment>\n";

var linepicking_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var linepicking_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <begin_vertex>\n";

var linepicking_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n";

var linepicking_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var meshlambert_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n\n#ifndef PLANCK_NO_OPACITY\n  vec4 diffuseColor = vec4(diffuse, opacity);\n#else\n  vec4 diffuseColor = vec4(diffuse, 1.0);\n#endif\nReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\nvec3 totalEmissiveRadiance = emissive;\n";

var meshlambert_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <logdepthbuf_fragment>\n#include <map_fragment>\n#include <color_fragment>\n#include <alphamap_fragment>\n#include <alphatest_fragment>\n#include <specularmap_fragment>\n#include <emissivemap_fragment>\n\n// accumulation\nreflectedLight.indirectDiffuse = getAmbientLightIrradiance(ambientLightColor);\n\n#include <lightmap_fragment>\n\nreflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb);\n\n#ifdef DOUBLE_SIDED\n  reflectedLight.directDiffuse = (gl_FrontFacing) ? vLightFront : vLightBack;\n#else\n  reflectedLight.directDiffuse = vLightFront;\n#endif\n\nreflectedLight.directDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb) * getShadowMask();\n\n// modulation\n#include <aomap_fragment>\n\nvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n#include <normal_flip>\n#include <envmap_fragment>\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

var meshlambert_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\n#ifndef PLANCK_NO_OPACITY\n  uniform float opacity;\n#endif\n\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n  varying vec3 vLightBack;\n#endif\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var meshlambert_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <uv_vertex>\n#include <uv2_vertex>\n#include <color_vertex>\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n";

var meshlambert_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <envmap_vertex>\n#include <lights_lambert_vertex>\n#include <shadowmap_vertex>\n";

var meshlambert_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#define LAMBERT\n\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n  varying vec3 vLightBack;\n#endif\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var meshpicking_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n";

var meshpicking_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <logdepthbuf_fragment>\n";

var meshpicking_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n";

var meshpicking_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <skinbase_vertex>\n#include <begin_vertex>\n";

var meshpicking_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <project_vertex>\n#include <logdepthbuf_vertex>\n#include <worldpos_vertex>\n#include <clipping_planes_vertex>\n";

var meshpicking_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n";

var points_fragment_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <clipping_planes_fragment>\n\nvec3 outgoingLight = vec3(0.0);\nvec4 diffuseColor = vec4(diffuse, opacity);\n";

var points_fragment_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <logdepthbuf_fragment>\n#include <map_particle_fragment>\n#include <color_fragment>\n#include <alphatest_fragment>\n\noutgoingLight = diffuseColor.rgb;\n\ngl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n#include <premultiplied_alpha_fragment>\n#include <tonemapping_fragment>\n#include <encodings_fragment>\n#include <fog_fragment>\n";

var points_fragment_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nuniform vec3 diffuse;\nuniform float opacity;\n";

var points_vertex_begin = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <color_vertex>\n#include <begin_vertex>\n";

var points_vertex_end = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <project_vertex>\n\n#ifdef USE_SIZEATTENUATION\n\tgl_PointSize = size * (scale / - mvPosition.z);\n#else\n\tgl_PointSize = size;\n#endif\n\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n#include <worldpos_vertex>\n#include <shadowmap_vertex>\n#include <fog_vertex>\n";

var points_vertex_pars = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2010-2017 three.js authors\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nuniform float size;\nuniform float scale;\n";

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
  linebasic_fragment_begin: linebasic_fragment_begin,
  linebasic_fragment_end: linebasic_fragment_end,
  linebasic_fragment_pars: linebasic_fragment_pars,
  linebasic_vertex_begin: linebasic_vertex_begin,
  linebasic_vertex_end: linebasic_vertex_end,
  linebasic_vertex_pars: linebasic_vertex_pars,
  linepicking_fragment_begin: linepicking_fragment_begin,
  linepicking_fragment_end: linepicking_fragment_end,
  linepicking_fragment_pars: linepicking_fragment_pars,
  linepicking_vertex_begin: linepicking_vertex_begin,
  linepicking_vertex_end: linepicking_vertex_end,
  linepicking_vertex_pars: linepicking_vertex_pars,
  meshlambert_fragment_begin: meshlambert_fragment_begin,
  meshlambert_fragment_end: meshlambert_fragment_end,
  meshlambert_fragment_pars: meshlambert_fragment_pars,
  meshlambert_vertex_begin: meshlambert_vertex_begin,
  meshlambert_vertex_end: meshlambert_vertex_end,
  meshlambert_vertex_pars: meshlambert_vertex_pars,
  meshpicking_fragment_begin: meshpicking_fragment_begin,
  meshpicking_fragment_end: meshpicking_fragment_end,
  meshpicking_fragment_pars: meshpicking_fragment_pars,
  meshpicking_vertex_begin: meshpicking_vertex_begin,
  meshpicking_vertex_end: meshpicking_vertex_end,
  meshpicking_vertex_pars: meshpicking_vertex_pars,
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

var fragmentShader = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"linebasic_fragment_pars\"\n\nuniform float pixelRatio;\nuniform float targetPixelRatio;\n\nvoid main() {\n  #include \"linebasic_fragment_begin\"\n\n  diffuseColor.a *= pixelRatio / targetPixelRatio;\n\n  #include \"linebasic_fragment_end\"\n}\n";

var vertexShader = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"linebasic_vertex_pars\"\n\nvoid main() {\n  #include \"linebasic_vertex_begin\"\n  #include \"linebasic_vertex_end\"\n}\n";

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

var fragmentShader$1 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"linepicking_fragment_pars\"\n\nuniform vec4 identifier;\n\nvoid main() {\n  #include \"linepicking_fragment_begin\"\n\n  gl_FragColor = identifier;\n\n  #include \"linepicking_fragment_end\"\n}\n";

var vertexShader$1 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"linepicking_vertex_pars\"\n\nvoid main() {\n  #include \"linepicking_vertex_begin\"\n  #include \"linepicking_vertex_end\"\n}\n";

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

var LinePickingMaterial = function (_Three$ShaderMaterial) {
  inherits(LinePickingMaterial, _Three$ShaderMaterial);

  function LinePickingMaterial(parameters) {
    classCallCheck(this, LinePickingMaterial);

    var _this = possibleConstructorReturn(this, (LinePickingMaterial.__proto__ || Object.getPrototypeOf(LinePickingMaterial)).call(this));

    _this.uniforms = Three.UniformsUtils.merge([Three.UniformsLib.common, {
      identifier: { value: new Three.Vector4() }
    }]);
    _this.vertexShader = Shaders.include(vertexShader$1);
    _this.fragmentShader = Shaders.include(fragmentShader$1);
    if (parameters !== undefined) {
      _this.setValues(parameters);
    }
    return _this;
  }

  createClass(LinePickingMaterial, [{
    key: 'isLineBasicMaterial',
    value: function isLineBasicMaterial() {
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
      uniform.x = (value >> 24 & 0xff) / 255.0;
      uniform.y = (value >> 16 & 0xff) / 255.0;
      uniform.z = (value >> 8 & 0xff) / 255.0;
      uniform.w = (value >> 0 & 0xff) / 255.0;
    }
  }]);
  return LinePickingMaterial;
}(Three.ShaderMaterial);

var fragmentShader$2 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"meshpicking_fragment_pars\"\n\nuniform vec4 identifier;\n\nvoid main() {\n  #include \"meshpicking_fragment_begin\"\n\n  gl_FragColor = identifier;\n\n  #include \"meshpicking_fragment_end\"\n}\n";

var vertexShader$2 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"meshpicking_vertex_pars\"\n\nvoid main() {\n  #include \"meshpicking_vertex_begin\"\n  #include \"meshpicking_vertex_end\"\n}\n";

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

var MeshPickingMaterial = function (_Three$ShaderMaterial) {
  inherits(MeshPickingMaterial, _Three$ShaderMaterial);

  function MeshPickingMaterial(parameters) {
    classCallCheck(this, MeshPickingMaterial);

    var _this = possibleConstructorReturn(this, (MeshPickingMaterial.__proto__ || Object.getPrototypeOf(MeshPickingMaterial)).call(this));

    _this.uniforms = Three.UniformsUtils.merge([Three.UniformsLib.common, {
      identifier: { value: new Three.Vector4() }
    }]);
    _this.vertexShader = Shaders.include(vertexShader$2);
    _this.fragmentShader = Shaders.include(fragmentShader$2);
    if (parameters !== undefined) {
      _this.setValues(parameters);
    }
    return _this;
  }

  createClass(MeshPickingMaterial, [{
    key: 'isMeshBasicMaterial',
    value: function isMeshBasicMaterial() {
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
      uniform.x = (value >> 24 & 0xff) / 255.0;
      uniform.y = (value >> 16 & 0xff) / 255.0;
      uniform.z = (value >> 8 & 0xff) / 255.0;
      uniform.w = (value >> 0 & 0xff) / 255.0;
    }
  }]);
  return MeshPickingMaterial;
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
      object[symbol] = init({});
    }
    return object[symbol];
  };
}

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

var internal = Namespace('PickingRenderer');

var PickingRenderer = function () {
  function PickingRenderer(_ref) {
    var renderer = _ref.renderer,
        width = _ref.width,
        height = _ref.height;
    classCallCheck(this, PickingRenderer);

    var scope = internal(this);
    scope.renderer = renderer;

    // Create an smaller offscreen render target for picking
    var pixelRatio = this.renderer.getPixelRatio();
    var deviceWidth = width * pixelRatio / 4;
    var deviceHeight = height * pixelRatio / 4;
    this.target = new Three.WebGLRenderTarget(deviceWidth, deviceHeight, {
      minFilter: Three.LinearFilter,
      magFilter: Three.LinearFilter,
      format: Three.RGBAFormat,
      stencilBuffer: false
    });
  }

  createClass(PickingRenderer, [{
    key: 'render',
    value: function render(scene, camera) {
      var renderer = this.renderer;
      renderer.clearDepth();
      renderer.render(scene, camera, this.target);
    }
  }, {
    key: 'resize',
    value: function resize(width, height) {
      var pixelRatio = this.renderer.getPixelRatio();
      var deviceWidth = width * pixelRatio / 4;
      var deviceHeight = height * pixelRatio / 4;
      this.target.setSize(deviceWidth, deviceHeight);
    }
  }, {
    key: 'pick',
    value: function pick(screen) {
      var texture = this.target;
      var x = (screen.x + 1) * texture.width / 2;
      var y = (screen.y + 1) * texture.height / 2;
      var buffer = new Uint8Array(4);
      this.renderer.readRenderTargetPixels(texture, x, y, 1, 1, buffer);
      var identifier = buffer[0] << 24 | buffer[1] << 16 | buffer[2] << 8 | buffer[3] << 0;
      return identifier;
    }
  }, {
    key: 'renderer',
    get: function get$$1() {
      var scope = internal(this);
      return scope.renderer;
    }
  }]);
  return PickingRenderer;
}();

var fragmentShader$3 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"points_fragment_pars\"\n\nvoid main() {\n  #include \"points_fragment_begin\"\n  #include \"points_fragment_end\"\n}\n";

var vertexShader$3 = "#define GLSLIFY 1\n//\n//  The MIT License\n//\n//  Copyright (C) 2016-Present Shota Matsuda\n//\n//  Permission is hereby granted, free of charge, to any person obtaining a\n//  copy of this software and associated documentation files (the \"Software\"),\n//  to deal in the Software without restriction, including without limitation\n//  the rights to use, copy, modify, merge, publish, distribute, sublicense,\n//  and/or sell copies of the Software, and to permit persons to whom the\n//  Software is furnished to do so, subject to the following conditions:\n//\n//  The above copyright notice and this permission notice shall be included in\n//  all copies or substantial portions of the Software.\n//\n//  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL\n//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER\n//  DEALINGS IN THE SOFTWARE.\n//\n\n#include \"points_vertex_pars\"\n\nvoid main() {\n  #include \"points_vertex_begin\"\n  #include \"points_vertex_end\"\n}\n";

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
    _this.vertexShader = Shaders.include(vertexShader$3);
    _this.fragmentShader = Shaders.include(fragmentShader$3);
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
    scope.renderBufferDirect = _this.renderBufferDirect;
    _this.renderBufferDirect = renderBufferDirect.bind(_this);
    return _this;
  }

  return Renderer;
}(Three.WebGLRenderer);

function renderBufferDirect(camera, fog, geometry, material, object, group) {
  if (material instanceof LineBasicMaterial$1 || material instanceof PointsMaterial$1) {
    material.uniforms.pixelRatio.value = this.getPixelRatio();
  }
  var scope = internal$1(this);
  scope.renderBufferDirect(camera, fog, geometry, material, object, group);
}

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
exports.LinePickingMaterial = LinePickingMaterial;
exports.MeshPickingMaterial = MeshPickingMaterial;
exports.PickingRenderer = PickingRenderer;
exports.PointsMaterial = PointsMaterial$1;
exports.Renderer = Renderer;
exports.ShaderChunks = ShaderChunks;
exports.Shaders = Shaders;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=planck-renderer.js.map
