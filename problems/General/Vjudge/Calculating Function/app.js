function calculating(n) {
  if (n % 2 === 0) {
      return n / 2;  // For even n
  } else {
      return -(n + 1) / 2;  // For odd n
  }
}


console.log(calculating(7))



