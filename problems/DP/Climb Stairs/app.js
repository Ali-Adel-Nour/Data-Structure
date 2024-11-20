var climbStairs = function(n,cache = {}) {


  if ( n <= 1 ){
      return 1
  }


  if (n in cache) {
      return cache[n];
  }

   cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);

  return cache[n]

};


//Itertatively
var climbStairs = function(n) {
  if (n <= 1) {
      return 1;
  }


  let a = 1;
  let b = 1;


  for (let i = 2; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
  }

  return b;
};
