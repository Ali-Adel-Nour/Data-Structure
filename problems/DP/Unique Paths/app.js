var uniquePaths = function(m, n,cache={}) {
  const key =  m + "," + n
  if(key in cache) return cache[key]
  if(m == 1 && n == 1) return 1
  if(m == 0 ||  n == 0) return 0


  cache[key] = uniquePaths(m-1,n,cache) + uniquePaths(m,n-1,cache)

  return cache[key]
};