export function egroup(data: string) {
  const value = data

  function toJson() {
    return JSON.stringify({
      type: 'egroup',
      value,
    })
  }

  return {
    value,
    toJson,
  }
}
