//using loop
var isEmpty = function(obj) {
  for (const _ in obj) return false;
   return true;
};

// using JSON.parse()

var isEmpty = function(obj) {
  if (JSON.stringify(obj).length <= 2) return true
  else return false
};

//using object.keys()

var isEmpty = function(obj) {
  return Object.keys(obj).length === 0
};