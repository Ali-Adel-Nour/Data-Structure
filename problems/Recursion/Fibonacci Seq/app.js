function fib(n){
  if(n <= 1){
    return n;
  }
  return fib(n-1) + fib(n-2)
}
console.log(fib(1))

//method 2 using memoization


function fibonacci(n){
  const ht ={0:0,1:1};
  if(n in ht){
      return ht[n];
  }else{
      ht[n]=fibonacci(n-1)+fibonacci(n-2);
      return ht[n];
  }
}


//using mimoizatin in easier way

var fib = function(n) {
    let cache = {}

   if (n <= 1) return n;

    if (n in cache) {
        return cache[n];
    }

    cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
    return cache[n];
};

//method 3 - Iterative method
function fibonacci(n){
    if(n<=1) return n;
    let counter =1;
    let prev = 0;
    let curr=1;
    let next;
    while(counter<n){
        next = prev+curr;
        prev =curr;
        curr = next;
        counter++;
    }
    return curr;
}
