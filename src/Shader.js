// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import ShaderLib from './ShaderLib'

export function includeShader (source, includes = ShaderLib, path = 'planck/') {
  const pattern = new RegExp(`#include +<${path}([\\w\\d.]+)>`, 'g')
  const replace = (match, id) => {
    const source = includes[id]
    if (source === undefined) {
      throw new Error(`Could not resolve #include <${path}${id}>`)
    }
    return source.replace(pattern, replace)
  }
  return source.replace(pattern, replace)
}

export default {
  include: includeShader
}
