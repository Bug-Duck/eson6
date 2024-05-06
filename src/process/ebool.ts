export function ebool(data: boolean) {
  const value = data

  function toJson() {
    return JSON.stringify({
      type: 'ebool',
      value: value ? 'true' : 'false',
    })
  }

  return {
    value,
    toJson,
    type: 'ebool',
  }
}
