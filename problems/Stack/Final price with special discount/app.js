var finalPrices = function (prices) {
  let stack = [];
  for (let i = 0; i < prices.length; i++) {

      while (stack.length > 0 && prices[i] <= prices[stack[stack.length - 1]]) {
          let j = stack.pop();
          prices[j] -= prices[i];
      }
      // Push the current index onto the stack
      stack.push(i);
  }
  return prices;
};

//Second Apporach Using Brute Force
//Time complexity:O(N^2)
//Space:O(1)

var finalPricesBruteForce = function(prices) {
  let n = prices.length;
  let finalPrices = [...prices]; // Clone the prices array

  for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
          if (prices[j] <= prices[i]) {
              finalPrices[i] -= prices[j];
              break;
          }
      }
  }

  return finalPrices;
};

