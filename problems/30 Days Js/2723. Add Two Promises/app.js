
//apporach 1

var addTwoPromises = async function(promise1, promise2) {
  return await Promise.all([promise1, promise2]).then(
     ([val1, val2]) => val1 + val2
  )
};
//apporach 2
var addTwoPromises = async function(promise1, promise2) {

     return await promise1 + await promise2;
};
