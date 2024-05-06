function eson(data: Record<string, any>) {
  const value = data
  const result: Record<string, any> = {}

  function stringify() {
    for (const unit in value) {
      switch (value[unit].type) {
        case 'egroup': {
          result[unit] = eson(value[unit]).stringify()
          break
        }
        default: {
          result[unit] = value[unit].toJson()
          break
        }
      }
    }

    return result
  }

  return {
    value,
    stringify,
  }
}

export default eson
export * from './parse'
export * from './process'
