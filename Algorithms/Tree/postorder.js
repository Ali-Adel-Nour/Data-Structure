class Node {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function postOrderTraversal(root) {
  if (root !== null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);
  }
}