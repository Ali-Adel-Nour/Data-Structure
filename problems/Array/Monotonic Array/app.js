var isMonotonic = function(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
          decreasing = false;
      } else if (nums[i] < nums[i - 1]) {
          increasing = false;
      }

      if (!increasing && !decreasing) {
          return false;
      }
  }

  return true;
};


/*
const checkMonotonic = function (n){
    const first = n[0];
    const last = n[n.length-1];
// 1.......10
    if(first === last){
        for(let i=0;i<n.length-1;i++){
            if(n[i+1]!==n[i]) return false;
        }
    }
    else if (first<last){
        // non decreasing
        for(let i=0;i<n.length-1;i++){
            if(n[i+1]<n[i]) return false;
        }
    }
    else{
        // non increasing
        for(let i=0;i<n.length-1;i++){
            if(n[i+1]>n[i]) return false;
        }
    }
    return true;
}

checkMonotonic([9]);

*/