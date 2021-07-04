export function groupArrayByNumberOfItems (arr, n) {
  if (arr === null) {
    throw new TypeError('arr must not be null')
  }

  return arr.reduce((r, e, i) =>
    (i % n ? r[r.length - 1].push(e) : r.push([e])) && r, [])
}

export function getRandomItems (arr, n) {
  return arr.sort(() => 0.5 - Math.random()).slice(0, n)
}
