//Depth First Search

class Node {
  constructor(val){

    this.val = val;
    this.left = null;
    this.right = null;
  }
}
//Iterative
/*const depthFirstValues = (root)=>{
  if(root === null){
    return []
  }
  const result = []
  const stack = [root]

  while(stack.length > 0){
    const current = stack.pop()
    result.push(current.val)
    if(current.right)stack.push(current.right)
if(current.left)stack.push(current.left)

  }
return result
}
*/
//Recursive
const depthFirstValues = (root)=>{
if(root === null) return []
const leftValues = depthFirstValues(root.left)
const rightValues = depthFirstValues(root.right)
return [root.val, ...leftValues, ...rightValues]
}


const a = new Node ('a')

const b = new Node ('b')

const c = new Node ('c')

const d = new Node ('d')

const e = new Node ('e')

const f = new Node ('f')

a.left = b;

a.right = c

b.left =d

b.right = e

c.right = f

console.log(depthFirstValues(a))