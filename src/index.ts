function eson6(data: Record<string, any>) {
  let value = data
  let result: Record<string, any> = {}

  function stringify() {
    for (const unit in value) {
      switch (value[unit].type) {
        case 'egroup': {
          result[unit] = eson6(value[unit]).stringify()
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

export default eson6
export * from './parse'
export * from './process'
