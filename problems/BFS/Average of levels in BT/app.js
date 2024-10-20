var averageOfLevels = function(root) {
  if (root === null) return [];

  const queue = [root];
  const res = [];

  while (queue.length > 0) {
      const n = queue.length;
      let sum = 0;

      for (let i = 0; i < n; i++) {
          const node = queue.shift();
          sum += node.val;

          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }

      res.push(sum / n);
  }

  return res;
};