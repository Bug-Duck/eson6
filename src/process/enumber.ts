export function enumber(data: number) {
  const value = data

  function toJson() {
    return JSON.stringify({
      type: 'enumber',
      value: value.toString(),
    })
  }

  return {
    value,
    toJson,
    type: 'enumber',
  }
}
