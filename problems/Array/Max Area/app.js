const maxAreaBruteForce = function (array) {

  let area =0;
  for(let i=0; i<array.length; i++) {
    for(let j=0; j<array[i].length; j++){
      const height = Math.min(array[i],array[j])
      const width = (j-i)
      area = Math.max(area,height*width)
    }
  }
  return area
}

/*
 var maxArea = function(H) {
    let ans = 0, i = 0, j = H.length-1
    while (i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
        H[i] <= H[j] ? i++ : j--
    }
    return ans
};
*/