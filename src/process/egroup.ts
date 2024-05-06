export function egroup(data: string) {
  let value = data

  function toJson() {
    return JSON.stringify({
      type: 'egroup',
      value
    })
  }

  return {
    value,
    toJson,
  }
}