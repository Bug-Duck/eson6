export function estring(data: string) {
  const value = data

  function toJson() {
    return JSON.stringify({
      type: 'estring',
      value,
    })
  }

  return {
    value,
    toJson,
    type: 'estring',
  }
}
