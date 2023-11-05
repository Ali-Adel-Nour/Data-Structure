var levelOrder = function(root) {
  if (!root) {
   return [];
 }

 const result = [];
 const queue = [];

 queue.push(root);

 while (queue.length > 0) {
   const levelSize = queue.length;
   const currentLevel = [];

   for (let i = 0; i < levelSize; i++) {
     const node = queue.shift();
     currentLevel.push(node.val);

     if (node.left) {
       queue.push(node.left);
     }

     if (node.right) {
       queue.push(node.right);
     }
   }

   result.push(currentLevel);
 }

 return result;
};