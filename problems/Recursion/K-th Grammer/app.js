var kthGrammar = function(n, k) {
  // Base case: the first row is always '0'
  if (n === 1) {
      return 0; // The first row is '0'
  }

  // Determine the parent position in the previous row
  const parentK = Math.ceil(k / 2); // k/2 rounded up

  // Get the symbol from the previous row
  const parentSymbol = kthGrammar(n - 1, parentK);

  // Determine the current symbol based on the rules
  if (k % 2 === 1) {
      return parentSymbol; // Odd index: same as parent
  } else {
      return parentSymbol === 0 ? 1 : 0; // Even index: opposite of parent
  }
}



//use cache

var kthGrammar = function(n, k, cache = {}) {

  if (n === 1) {
      return 0;
  }


  if (cache[n] && cache[n][k] !== undefined) {
      return cache[n][k];
  }



  const parentK = Math.ceil(k / 2);

  const parentSymbol = kthGrammar(n - 1, parentK, cache);


  let currentSymbol;
  if (k % 2 === 1) {
      currentSymbol = parentSymbol;
  } else {
      currentSymbol = parentSymbol === 0 ? 1 : 0;
  }


  if (!cache[n]) {
      cache[n] = {};
  }
  cache[n][k] = currentSymbol;

  return currentSymbol;
};