var generateTrees = function(n) {
  if (n === 0) return [null]

  function buildTrees(start, end) {
      if (start > end) return [null];
      const trees = [];
      for (let i = start; i <= end; i++) {
          const leftSubtrees = buildTrees(start, i - 1);
          const rightSubtrees = buildTrees(i + 1, end);

          for (const left of leftSubtrees) {
              for (const right of rightSubtrees) {
                  const root = new TreeNode(i, left, right);
                  trees.push(root);
              }
          }
      }
      return trees;
  }

  return buildTrees(1, n);
};