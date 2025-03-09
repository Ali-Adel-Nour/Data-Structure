var convertToTitle = function(columnNumber) {
  let result = '';

  while (columnNumber > 0) {
      // Subtract 1 since A represents 1 in the column but 0 in zero-based number system
      columnNumber--;

      // Get remainder to find current character
      let remainder = columnNumber % 26;

      // Convert remainder to character (A-Z) and add to front of result
      result = String.fromCharCode(65 + remainder) + result;

      // Integer divide by 26 to move to next position
      columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
