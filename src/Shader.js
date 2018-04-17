// The MIT License
// Copyright (C) 2016-Present Shota Matsuda

import ShaderLib from './ShaderLib'

export default {
  include (source, includes = ShaderLib, scope = 'planck/') {
    const pattern = new RegExp(`#include +<${scope}([\\w\\d.]+)>`, 'g')
    const replace = (match, id) => {
      const source = includes[id]
      if (source === undefined) {
        throw new Error(`Could not resolve #include <${scope}${id}>`)
      }
      return source.replace(pattern, replace)
    }
    return source.replace(pattern, replace)
  }
}
