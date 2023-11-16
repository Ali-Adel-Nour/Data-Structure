//Iterative iteration
/*
const treeMinValue = (root)=>{
  let smallest = Infinity;
const stack = [root]

while(stack.length > 0) {
  if(current.val < smallest) smallest = current.val
  if(current.left !== null) stack.push(current.left)
  if(current.right !== null) stack.push(current.right)
}
return smallest
}
*/

//Recursive
const treeMinValue = (root)=>{
  if(root === null) return Infinity
  const leftMin = treeMinValue(root.left)
  const rightMin = treeMinValue(root.right)
  return Math.min(root.val,leftMin, rightMin)
}