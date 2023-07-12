class Node {
  constructor(val) {

    this.val = val
    this.next = null
}
}

const a = new Node('a')

const b = new Node('b')

const c = new Node('c')

const d = new Node('d')


a.next = b
b.next = c
c.next = d



/*
const deleteValue = (head,target)=>{

  if(head.val === target){
    return head.next
  }

  let prev = null

  let curr = head

  while(curr !==null){
    if(curr.val === target){
      //delete it
      prev.next = curr.next
    }
    prev = curr
    curr = curr.next
  }
  return head
}

const print = (head)=>{
  if(head === null) return
  console.log(head.val)
  print(head.next)
}

*/

//Recursivly

const deleteValue=(head,target)=>{
  if(head.val===target){
    return head.next
  }

_deleteValue(head,null,target)
return head
}

const _deleteValue=(curr,prev,target)=>{



  if(curr === null){
    return;
  }

  if(curr.val === target){
    prev.next = curr.next
    return
  }


  _deleteValue(curr.next,curr,target)
}
const print = (head)=>{
  if(head === null) return
  console.log(head.val)
  print(head.next)
}

//a->b->c->d
//   p  c




deleteValue(a,'c')

print(a)

const newHead = deleteValue(a,'d')
console.log('-')
print(newHead)