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
/*
//Optimization using hashtable

function findIndicesSumGive(array,targetValue){
    const hashTable = {}
    let neededValue ;
    for(let i = 0; i < array.length; i++){
      neededValue = array[i] - targetValue
      if(neededValue in hashTable){
        return{i,}
      }
      else{
        hashTable[array[i]] = targetValue======
      }
    }
  }
  */