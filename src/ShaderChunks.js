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

import depth_fragment_begin from './chunk/depth_fragment_begin.glsl'
import depth_fragment_end from './chunk/depth_fragment_end.glsl'
import depth_fragment_pars from './chunk/depth_fragment_pars.glsl'
import depth_vertex_begin from './chunk/depth_vertex_begin.glsl'
import depth_vertex_end from './chunk/depth_vertex_end.glsl'
import depth_vertex_pars from './chunk/depth_vertex_pars.glsl'
import distance_fragment_begin from './chunk/distance_fragment_begin.glsl'
import distance_fragment_end from './chunk/distance_fragment_end.glsl'
import distance_fragment_pars from './chunk/distance_fragment_pars.glsl'
import distance_vertex_begin from './chunk/distance_vertex_begin.glsl'
import distance_vertex_end from './chunk/distance_vertex_end.glsl'
import distance_vertex_pars from './chunk/distance_vertex_pars.glsl'
import linebasic_fragment_begin from './chunk/linebasic_fragment_begin.glsl'
import linebasic_fragment_end from './chunk/linebasic_fragment_end.glsl'
import linebasic_fragment_pars from './chunk/linebasic_fragment_pars.glsl'
import linebasic_vertex_begin from './chunk/linebasic_vertex_begin.glsl'
import linebasic_vertex_end from './chunk/linebasic_vertex_end.glsl'
import linebasic_vertex_pars from './chunk/linebasic_vertex_pars.glsl'
import linepicking_fragment_begin from './chunk/linepicking_fragment_begin.glsl'
import linepicking_fragment_end from './chunk/linepicking_fragment_end.glsl'
import linepicking_fragment_pars from './chunk/linepicking_fragment_pars.glsl'
import linepicking_vertex_begin from './chunk/linepicking_vertex_begin.glsl'
import linepicking_vertex_end from './chunk/linepicking_vertex_end.glsl'
import linepicking_vertex_pars from './chunk/linepicking_vertex_pars.glsl'
import meshlambert_fragment_begin from './chunk/meshlambert_fragment_begin.glsl'
import meshlambert_fragment_end from './chunk/meshlambert_fragment_end.glsl'
import meshlambert_fragment_pars from './chunk/meshlambert_fragment_pars.glsl'
import meshlambert_vertex_begin from './chunk/meshlambert_vertex_begin.glsl'
import meshlambert_vertex_end from './chunk/meshlambert_vertex_end.glsl'
import meshlambert_vertex_pars from './chunk/meshlambert_vertex_pars.glsl'
import meshpicking_fragment_begin from './chunk/meshpicking_fragment_begin.glsl'
import meshpicking_fragment_end from './chunk/meshpicking_fragment_end.glsl'
import meshpicking_fragment_pars from './chunk/meshpicking_fragment_pars.glsl'
import meshpicking_vertex_begin from './chunk/meshpicking_vertex_begin.glsl'
import meshpicking_vertex_end from './chunk/meshpicking_vertex_end.glsl'
import meshpicking_vertex_pars from './chunk/meshpicking_vertex_pars.glsl'
import points_fragment_begin from './chunk/points_fragment_begin.glsl'
import points_fragment_end from './chunk/points_fragment_end.glsl'
import points_fragment_pars from './chunk/points_fragment_pars.glsl'
import points_vertex_begin from './chunk/points_vertex_begin.glsl'
import points_vertex_end from './chunk/points_vertex_end.glsl'
import points_vertex_pars from './chunk/points_vertex_pars.glsl'

export default {
  depth_fragment_begin,
  depth_fragment_end,
  depth_fragment_pars,
  depth_vertex_begin,
  depth_vertex_end,
  depth_vertex_pars,
  distance_fragment_begin,
  distance_fragment_end,
  distance_fragment_pars,
  distance_vertex_begin,
  distance_vertex_end,
  distance_vertex_pars,
  linebasic_fragment_begin,
  linebasic_fragment_end,
  linebasic_fragment_pars,
  linebasic_vertex_begin,
  linebasic_vertex_end,
  linebasic_vertex_pars,
  linepicking_fragment_begin,
  linepicking_fragment_end,
  linepicking_fragment_pars,
  linepicking_vertex_begin,
  linepicking_vertex_end,
  linepicking_vertex_pars,
  meshlambert_fragment_begin,
  meshlambert_fragment_end,
  meshlambert_fragment_pars,
  meshlambert_vertex_begin,
  meshlambert_vertex_end,
  meshlambert_vertex_pars,
  meshpicking_fragment_begin,
  meshpicking_fragment_end,
  meshpicking_fragment_pars,
  meshpicking_vertex_begin,
  meshpicking_vertex_end,
  meshpicking_vertex_pars,
  points_fragment_begin,
  points_fragment_end,
  points_fragment_pars,
  points_vertex_begin,
  points_vertex_end,
  points_vertex_pars,
}
