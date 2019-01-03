export function setValue(key, value) {
  if (!value && value !== false) {
    return
  }
  const encodedKey = window.btoa(`@@AUTH:${key}`)
  const stringValue = JSON.stringify(value)
  const encodedValue = window.btoa(stringValue)
  window.localStorage.setItem(encodedKey, encodedValue)
}

export function removeValue(key) {
  const encodedKey = window.btoa(`@@AUTH:${key}`)
  window.localStorage.removeItem(encodedKey)
}

export function getValue(key) {
  const encodedKey = window.btoa(`@@AUTH:${key}`)
  let encodedValue = window.localStorage.getItem(encodedKey)
  const stringValue = encodedValue && window.atob(encodedValue)
  return stringValue && JSON.parse(stringValue)
}
