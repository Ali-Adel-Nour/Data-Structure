//DFS
var maxDepth = function(root) {
  if (root === null) {
     return 0;
 }

 const left = maxDepth(root.left);
 const right = maxDepth(root.right);

 return Math.max(left, right) + 1;
};



//BFS

var maxDepth = function(root) {
  if (!root || root.length === 0) {
      return 0;
  }

  let depth = 0;
  let currentLevel = [root];

  while (currentLevel.length > 0) {
      depth++;

      let nextLevel = [];

      for (let node of currentLevel) {
          if (node !== null) {
              if (node.left !== null) {
                  nextLevel.push(node.left);
              }
              if (node.right !== null) {
                  nextLevel.push(node.right);
              }
          }
      }

      currentLevel = nextLevel;
  }

  return depth;
}