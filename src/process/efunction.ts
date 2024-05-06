export function efunction(data: Function) {
  const value = data

  function toFunctionString() {
    return value.toString()
  }

  function toJson() {
    return JSON.stringify({
      type: 'efunction',
      value: toFunctionString()
    })
  }

  return {
    value,
    toJson,
  }
}