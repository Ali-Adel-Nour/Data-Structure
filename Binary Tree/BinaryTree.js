class Node {
  constructor(val){

    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node ('b')

const b = new Node ('c')

const c = new Node ('d')

const d = new Node ('e')

a.left = b;

a.right = c

b.left =d


b.right = e