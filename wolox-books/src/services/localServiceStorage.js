export function setValue(key, value) {
  if (!value && value !== false) {
    return
  }
  const encodedKey = window.btoa(`@@AUTH:${key}`)
  const stringValue = JSON.stringify(value)
  const encodedValue = window.btoa(stringValue)
  try {
    window.localStorage.setItem(encodedKey, encodedValue)
  } catch (e) {
    this.tempStorage[encodedKey] = encodedValue
  }
}

export function removeValue(key) {
  const encodedKey = window.btoa(`@@AUTH:${key}`)
  try {
    window.localStorage.removeItem(encodedKey)
  } catch (e) {
    this.tempStorage[encodedKey] = undefined
  }
}
