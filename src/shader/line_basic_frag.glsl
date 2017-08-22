// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

#include "line_basic_fragment_pars"

uniform float pixelRatio;
uniform float targetPixelRatio;

void main() {
  #include "line_basic_fragment_begin"

  diffuseColor.a *= pixelRatio / targetPixelRatio;

  #include "line_basic_fragment_end"
}
