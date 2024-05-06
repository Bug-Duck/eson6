export function ebool(data: boolean) {
  let value = data

  function toJson() {
    return JSON.stringify({
      type: 'ebool',
      value: value ? 'true' : 'false'
    })
  }

  return {
    value,
    toJson,
    type: 'ebool'
  }
}