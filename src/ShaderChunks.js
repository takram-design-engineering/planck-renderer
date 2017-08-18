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
import line_basic_fragment_begin from './chunk/line_basic_fragment_begin.glsl'
import line_basic_fragment_end from './chunk/line_basic_fragment_end.glsl'
import line_basic_fragment_pars from './chunk/line_basic_fragment_pars.glsl'
import line_basic_vertex_begin from './chunk/line_basic_vertex_begin.glsl'
import line_basic_vertex_end from './chunk/line_basic_vertex_end.glsl'
import line_basic_vertex_pars from './chunk/line_basic_vertex_pars.glsl'
import line_picking_fragment_begin from './chunk/line_picking_fragment_begin.glsl'
import line_picking_fragment_end from './chunk/line_picking_fragment_end.glsl'
import line_picking_fragment_pars from './chunk/line_picking_fragment_pars.glsl'
import line_picking_vertex_begin from './chunk/line_picking_vertex_begin.glsl'
import line_picking_vertex_end from './chunk/line_picking_vertex_end.glsl'
import line_picking_vertex_pars from './chunk/line_picking_vertex_pars.glsl'
import mesh_lambert_fragment_begin from './chunk/mesh_lambert_fragment_begin.glsl'
import mesh_lambert_fragment_end from './chunk/mesh_lambert_fragment_end.glsl'
import mesh_lambert_fragment_pars from './chunk/mesh_lambert_fragment_pars.glsl'
import mesh_lambert_vertex_begin from './chunk/mesh_lambert_vertex_begin.glsl'
import mesh_lambert_vertex_end from './chunk/mesh_lambert_vertex_end.glsl'
import mesh_lambert_vertex_pars from './chunk/mesh_lambert_vertex_pars.glsl'
import mesh_picking_fragment_begin from './chunk/mesh_picking_fragment_begin.glsl'
import mesh_picking_fragment_end from './chunk/mesh_picking_fragment_end.glsl'
import mesh_picking_fragment_pars from './chunk/mesh_picking_fragment_pars.glsl'
import mesh_picking_vertex_begin from './chunk/mesh_picking_vertex_begin.glsl'
import mesh_picking_vertex_end from './chunk/mesh_picking_vertex_end.glsl'
import mesh_picking_vertex_pars from './chunk/mesh_picking_vertex_pars.glsl'
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
  line_basic_fragment_begin,
  line_basic_fragment_end,
  line_basic_fragment_pars,
  line_basic_vertex_begin,
  line_basic_vertex_end,
  line_basic_vertex_pars,
  line_picking_fragment_begin,
  line_picking_fragment_end,
  line_picking_fragment_pars,
  line_picking_vertex_begin,
  line_picking_vertex_end,
  line_picking_vertex_pars,
  mesh_lambert_fragment_begin,
  mesh_lambert_fragment_end,
  mesh_lambert_fragment_pars,
  mesh_lambert_vertex_begin,
  mesh_lambert_vertex_end,
  mesh_lambert_vertex_pars,
  mesh_picking_fragment_begin,
  mesh_picking_fragment_end,
  mesh_picking_fragment_pars,
  mesh_picking_vertex_begin,
  mesh_picking_vertex_end,
  mesh_picking_vertex_pars,
  points_fragment_begin,
  points_fragment_end,
  points_fragment_pars,
  points_vertex_begin,
  points_vertex_end,
  points_vertex_pars,
}
