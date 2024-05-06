export function enumber(data: number) {
  let value = data

  function toJson() {
    return JSON.stringify({
      type: 'enumber',
      value: value.toString()
    })
  }

  return {
    value,
    toJson,
    type: 'enumber'
  }
}