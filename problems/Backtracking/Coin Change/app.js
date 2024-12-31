function minCoins(coins, amount, sum, memo) {
  if (sum === amount) {
    return 0;
  }
  if (sum > amount) {
    return Infinity;
  }
  if (memo[sum] != -1) {
    return memo[sum];
  }
  let ans = Infinity;
  for (let coin of coins) {
    let result = minCoins(coins, amount, sum + coin, memo);
    if (result === Infinity) {
      continue;
    }
    ans = Math.min(ans, result + 1);
  }
  return memo[sum] = ans;
}
function coinChange(coins, amount) {
  let memo = new Array(amount + 1).fill(-1);
  let result = minCoins(coins, amount, 0, memo);
  return result === Infinity ? -1 : result;
}