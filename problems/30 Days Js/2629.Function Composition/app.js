var compose = function(functions){
  return function(x){
    for(const fn of functions.reverse()){
      x = fn(x)
    }
    return x
  }
}


var compose = function(functions){
  return function(x){
    const fn = (acc,f)=> f (acc)
    //takes two a f and value
functions.reduceRight(fn,x)
  }
}