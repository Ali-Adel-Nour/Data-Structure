var minimumCardPickup = function(cards) {
  const window = new Map();
  let left = 0;
  let shortest = cards.length + 1;
  for (let right = 0; right < cards.length; ++right) {
      window.set(cards[right], (window.get(cards[right]) ?? 0) + 1);
      while (window.get(cards[right]) === 2) {
          shortest = Math.min(shortest, right - left + 1);
          window.set(cards[left], window.get(cards[left]) - 1);
          ++left;
      }
  }
  return shortest !== cards.length + 1 ? shortest : -1;
};