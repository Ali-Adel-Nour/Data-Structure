
var rightSideView = function(root) {
  if (root === null) return [];
  const res = [];
  const queue = [root];

  while (queue.length > 0) {
      const n = queue.length;
      res.push(queue[0].val);


      for (let i = 0; i < n; i++) {
          const node = queue.shift();

          for (const child of [node.right, node.left]) {
              if (child) queue.push(child);
          }
      }
  }
  return res;
}