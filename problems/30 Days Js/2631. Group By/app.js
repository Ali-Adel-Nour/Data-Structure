Array.prototype.groupBy = function(fn){
  const res = {}

  for(const obj of this){
    const key = fn(obj)
    res[key] = res[key] || [];
    res[key].push(obj)
  }
  return res


}