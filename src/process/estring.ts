export function estring(data: string) {
  let value = data

  function toJson() {
    return JSON.stringify({
      type: 'estring',
      value
    })
  }

  return {
    value,
    toJson,
    type: 'estring'
  }
}