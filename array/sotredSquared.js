//Brute Force
function sortedSquared(array){
  const newArray = new Array(array.length).fill(0);

  for(let i = 0; i < array.length; i++){
    newArray[i] = Math.pow(array[i],2) // array[i]*array[i]

  }
  newArray.sort(function(a,b){return a - b})
  return newArray
}

//Two pointers

function sortedSquarredArray(array){
  const newArray = new Array(array.length).fill(0);
  let pointerLeft =0;
  let pointerRight = array.length-1;
  for(let i=array.length-1;i>=0;i--){
      const leftSquared = Math.pow(array[pointerLeft],2);
      const rightSquared = Math.pow(array[pointerRight],2);
      if(leftSquared>rightSquared){
          newArray[i]=leftSquared;
          pointerLeft++;
      } else{
          newArray[i]=rightSquared;
          pointerRight--;
      }
  }
  return newArray;
}
a = [1,3,4,50]
b = [-7,-2,3,4,9]
c = []
console.log(sortedSquared(a))
console.log(sortedSquared(b))
console.log(sortedSquared(c))