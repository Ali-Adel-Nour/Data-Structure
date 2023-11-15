//Recursively
function sumTree(root){
if(root === null) return 0;
  return root.val + sumTree(head.left) + sumTree(head.right)

}



//Iterative
const sumTree = (root) => {
  if(root === null) return 0;
  let totalSum = 0;
  const queue = [root]

  while(queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val;
    if(current.left !== null) queue.push(current.left);
    if(current.right !== null) queue.push(current.right);
  }
  return totalSum;
}