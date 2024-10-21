var zigzagLevelOrder = function(root) {

  if (root === null) return [];

  const queue = [root];
  const results = [];
  let leftToRight = true;
  while (queue.length > 0) {
      const levelSize = queue.length;
      const levelResult = [];

      for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();


          if (leftToRight) {
              levelResult.push(node.val);
          } else {
              levelResult.unshift(node.val);
          }


          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }


      results.push(levelResult);
      leftToRight = !leftToRight;
  }

  return results;
}

