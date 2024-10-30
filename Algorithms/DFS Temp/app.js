function dfs(root, target) {
  if (!root) return null;
  if (root.val === target) return root;
  // return non-null return value from the recursive calls
  const left = dfs(root.left, target);
  if (left != null) return left;
  const right = dfs(root.right, target);
  // at this point, we know left is null, and right could be null or non-null
  // we return right child's recursive call result directly because
  // - if it's non-null we should return it
  // - if it's null, then both left and right are null, we want to return null
  return right;
}




// const depthFirstValues = (root)=>{
//   if(root === null){
//     return []
//   }
//   const result = []
//   const stack = [root]

//   while(stack.length > 0){
//     const current = stack.pop()
//     result.push(current.val)
//     if(current.right)stack.push(current.right)
// if(current.left)stack.push(current.left)

//   }
// return result
// }