var twoSum = function(nums, target) {
  var map= {};
  for(var i = 0;i <nums.length;i++){
      var value = nums[i]
      var complment_pair = target - value
      if(map[complment_pair] !== undefined){
          return [map[complment_pair],i]
      }else{
          map[value]=i
      }
  }

};