var singleNumber = function(nums) {
  let set = new Set();

   for (let num of nums) {
       if (set.has(num)) {
           set.delete(num);
       } else {
           set.add(num);
       }
   }


   return set.values().next().value;
};