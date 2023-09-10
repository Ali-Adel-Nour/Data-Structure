function memoize(fn){
const cache = {}

return function(...args){
  // to convert it to strings
  const key = JSON.stringify(args)

  // because cant do this because ... args works with array

  if(key in cache) {
    return cache[key]
  }
  cache[key] = fn(...args)
  return cache[key]
}
}