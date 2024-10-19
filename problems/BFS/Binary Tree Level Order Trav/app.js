//https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
  if(root == null){
      return []
  }
const res = [];

  const queue = [root];

  while (queue.length > 0) {

      const n = queue.length;
      const newLevel = [];

      for (let i = 0; i < n; i++) {
          const node = queue.shift();
          newLevel.push(node.val);

          for (const child of [node.left, node.right]) {
              if (child) queue.push(child);
          }
      }
      res.push(newLevel);
  }
  return res;
};