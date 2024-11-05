class Node {
  constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

function inOrderTraversal(root) {
  if (root !== null) {
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);

  }
}