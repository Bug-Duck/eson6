export async function eimage(src: string) {
  const res = await fetch(src)
  const array = await res.arrayBuffer()
  const value = array

  function arrayBufferToString() {
    const decoder = new TextDecoder();
    return decoder.decode(value);
  }
  
  // 将字符串转换为 ArrayBuffer 对象
  function stringToArrayBuffer(str: string) {
    const encoder = new TextEncoder();
    return encoder.encode(str);
  }

  function toJson() {
    return JSON.stringify({
      type: 'eimage',
      value: arrayBufferToString()
    })
  }

  return {
    value,
    arrayBufferToString,
    stringToArrayBuffer,
    toJson
  }
}