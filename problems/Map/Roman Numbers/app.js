//Using Map
var romanToInt = function(s) {
  let romanNumerals = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentVal = romanNumerals.get(s[i]);
    let nextVal = romanNumerals.get(s[i + 1]);

    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
};

//Using Object
var romanToInt = function(s) {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let result = 0;

for (let i = 0; i < s.length; i++) {
    const cur = romanNumerals[s[i]];
    const next = romanNumerals[s[i + 1]];

    if (cur < next) {
        result += next - cur;
        i++;
    } else {
        result += cur;
    }
}

return result;
};