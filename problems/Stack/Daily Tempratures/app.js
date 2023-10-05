var dailyTemperatures = function(temperatures) {
  let res = Array.from({length:temperatures.length},x=>0);
  let stack = [];
  for(let i=0; i<temperatures.length; i++){
    while(stack.length>0 && temperatures[stack[stack.length-1]]<temperatures[i]){
      let j = stack.pop();
      res[j] = i-j;
    }
    stack.push(i);
  }
  return res;
};