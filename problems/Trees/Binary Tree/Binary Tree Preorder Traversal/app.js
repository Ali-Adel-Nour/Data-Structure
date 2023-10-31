var preorderTraversal = function(root) {
    const stack = []
    const res = []

    while (root || stack.length) {
        if (root) {
            res.push(root.val);
            stack.push(root.right);
            root = root.left;
        } else {
            root = stack.pop();
        }
    }

    return res;
};

//Recursive

var preorderTraversal = function(root) {

  if(root === null) return [];


    const rootValue = root.val;

  const leftValues = preorderTraversal(root.left);


  const rightValues = preorderTraversal(root.right);


  return [ rootValue, ...leftValues,...rightValues];
};