class Node {
  constructor(data) {
    this.data = data;
    this.height = 1;
    this.lchild = null;
    this.rchild = null;
  }
}

let root = null;

function nodeHeight(p) {
  let hl = p && p.lchild ? p.lchild.height : 0;
  let hr = p && p.rchild ? p.rchild.height : 0;
  return hl > hr ? hl + 1 : hr + 1;
}

function balanceFactor(p) {
  let hl = p && p.lchild ? p.lchild.height : 0;
  let hr = p && p.rchild ? p.rchild.height : 0;
  return hl - hr;
}

function llRotation(p) {
  let pl = p.lchild;
  let plr = pl.rchild;

  pl.rchild = p;
  p.lchild = plr;

  p.height = nodeHeight(p);
  pl.height = nodeHeight(pl);

  if (root === p) {
    root = pl;
  }
  return pl;
}

function lrRotation(p) {
  let pl = p.lchild;
  let plr = pl.rchild;

  pl.rchild = plr.lchild;
  p.lchild = plr.rchild;

  plr.lchild = pl;
  plr.rchild = p;

  pl.height = nodeHeight(pl);
  p.height = nodeHeight(p);
  plr.height = nodeHeight(plr);

  if (root === p) {
    root = plr;
  }
  return plr;
}

function rrRotation(p) {
  // Implementation of RR Rotation
  return null;
}

function rlRotation(p) {
  // Implementation of RL Rotation
  return null;
}

function rInsert(p, key) {
  if (p === null) {
    let t = new Node(key);
    return t;
  }
  if (key < p.data) {
    p.lchild = rInsert(p.lchild, key);
  } else if (key > p.data) {
    p.rchild = rInsert(p.rchild, key);
  }

  p.height = nodeHeight(p);

  if (balanceFactor(p) === 2 && balanceFactor(p.lchild) === 1) {
    return llRotation(p);
  } else if (balanceFactor(p) === 2 && balanceFactor(p.lchild) === -1) {
    return lrRotation(p);
  } else if (balanceFactor(p) === -2 && balanceFactor(p.rchild) === -1) {
    return rrRotation(p);
  } else if (balanceFactor(p) === -2 && balanceFactor(p.rchild) === 1) {
    return rlRotation(p);
  }
  return p;
}

// Example usage:
root = rInsert(root, 50);
console.log(rInsert(root, 10));
console.log(rInsert(root, 20))
