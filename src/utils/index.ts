export function get(val: string) {
  if (val) {
    return val.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  }
}
