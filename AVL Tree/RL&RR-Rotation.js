class Node {
  constructor(data) {
    this.data = data;
    this.bf = 0;
    this.lchild = null;
    this.rchild = null;
  }
}

let root = null;

function height(p) {
  if (!p) return 0;
  let x = height(p.lchild);
  let y = height(p.rchild);
  return Math.max(x, y) + 1;
}

function insert(key) {
  let t = root;
  let r = null;
  let p;

  if (root === null) {
    p = new Node(key);
    root = p;
    return;
  }

  while (t !== null) {
    r = t;
    if (key < t.data) {
      t = t.lchild;
    } else if (key > t.data) {
      t = t.rchild;
    } else {
      return;
    }
  }

  p = new Node(key);
  if (key < r.data) r.lchild = p;
  else r.rchild = p;
}

function LLRotation(p) {
  let pl = p.lchild;
  pl.bf = 0;
  p.lchild = pl.rchild;
  pl.rchild = p;
  p.bf = height(p.lchild) - height(p.rchild);
  if (p === root) root = pl;
  return pl;
}

function LRRotation(p) {
  let pl = p.lchild;
  let plr = pl.rchild;
  plr.bf = 0;
  p.lchild = plr.rchild;
  pl.rchild = plr.lchild;
  plr.lchild = pl;
  plr.rchild = p;
  p.bf = height(p.lchild) - height(p.rchild);
  pl.bf = height(pl.lchild) - height(pl.rchild);
  if (p === root) root = plr;
  return plr;
}

function RRRotation(p) {
  let pr = p.rchild;
  pr.bf = 0;
  p.rchild = pr.lchild;
  pr.lchild = p;
  p.bf = height(p.lchild) - height(p.rchild);
  if (p === root) root = pr;
  return pr;
}

function RLRotation(p) {
  let pr = p.rchild;
  let prl = pr.lchild;
  prl.bf = 0;
  p.rchild = prl.lchild;
  pr.lchild = prl.rchild;
  prl.rchild = pr;
  prl.lchild = p;
  p.bf = height(p.lchild) - height(p.rchild);
  pr.bf = height(pr.lchild) - height(pr.rchild);
  if (p === root) root = prl;
  return prl;
}

function RInsert(p, key) {
  if (p === null) {
    let t = new Node(key);
    return t;
  }
  if (key < p.data) {
    p.lchild = RInsert(p.lchild, key);
  } else if (key > p.data) {
    p.rchild = RInsert(p.rchild, key);
  }

  p.bf = height(p.lchild) - height(p.rchild);

  if (p.bf === 2 && p.lchild.bf === 1) {
    return LLRotation(p);
  }
  if (p.bf === 2 && p.lchild.bf === -1) {
    return LRRotation(p);
  }
  if (p.bf === -2 && p.rchild.bf === -1) {
    return RRRotation(p);
  }
  if (p.bf === -2 && p.rchild.bf === 1) {
    return RLRotation(p);
  }
  return p;
}

function inorder(p) {
  if (p) {
    inorder(p.lchild);
    console.log(p.data);
    inorder(p.rchild);
  }
}

function search(key) {
  let t = root;
  while (t !== null) {
    if (key === t.data) {
      return t;
    } else if (key < t.data) {
      t = t.lchild;
    } else {
      t = t.rchild;
    }
  }
  return null;
}

// Example usage:
insert(30);
RInsert(root, 50);
RInsert(root, 40);
RInsert(root, 20);
RInsert(root, 10);
RInsert(root, 42);
RInsert(root, 46);
inorder(root);
console.log();

let temp = search(20);
if (temp !== null) {
  console.log(`element ${temp.data} is found`);
} else {
  console.log("element is not found");
}
