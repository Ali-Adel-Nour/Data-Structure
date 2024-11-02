// Converts a decimal BigInt to a binary string
function Bin(num) {
  return BigInt(num).toString(2);
}

// Converts a binary string to a decimal BigInt
function unBin(str) {
  return BigInt(parseInt(str, 2));
}


//Hardest Version


// Converts a binary string to a decimal BigInt
function binaryToDecimalConverter(binaryString) {
  let decimal = 0n;
  for (let i = 0; i < binaryString.length; i++) {
      // Get the digit as a BigInt (either 0n or 1n)
      let digit = BigInt(binaryString[i]);
      // Calculate the power of 2 based on the position from the right
      let power = BigInt(binaryString.length - i - 1);
      // Add the value to the decimal (digit * 2^power)
      decimal += digit * (2n ** power);
  }
  return decimal;
}

// Converts a decimal BigInt to a binary string
function decimalToBinaryConverter(decimalBigInt) {
  let binaryString = "";
  let current = decimalBigInt;

  // Keep dividing by 2 and storing the remainder
  while (current > 0n) {
      // Add the remainder (0 or 1) to the front of the binary string
      binaryString = (current % 2n) + binaryString;
      // Update current by dividing it by 2
      current = current / 2n;
  }

  // If the number was 0, return "0" as binary representation
  return binaryString === "" ? "0" : binaryString;
}

// Example usage
console.log(binaryToDecimalConverter("111110111111100")); // Output: 31980n
console.log(decimalToBinaryConverter(31980n));            // Output: "111110111111100"
