class Node {
  constructor(elm){
    this.element = elm;
    this.next = null;
  }
}

class stackUsingLL {
  constructor(){
    this.length = 0;
    this.head = null;
  }

push(elm){

  let node = new Node(elm),
    current;

    //Add the new node at the top
    current = this.head;
    node.next = current;
    this.head = node;

    this.length++;
}

pop(){
  let current = this.head

  if(current){
    let elm = current.element;
    current = current.next

    this.head = current

    this.length--;

    return elm
  }
  return null
}

peek(){
  if(this.head){
    return this.head.element
  }
  return null
}

toArray(){
  let arr = []

  let current = this.head

  while(current){
    arr.push(current.element)
    current = current.next
  }
  return arr
}

isEmpty ()  {
  return this.length === 0;
}

//Return the size of the stack
size  () {
  return this.length;
}

//Clear the stack
clear  () {
  this.head = null;
  this.length = 0;
}
}

let stack = new stackUsingLL();   //creating new instance of Stack
 stack.push(1);
 stack.push(2);
 stack.push(3);
 console.log(stack.peek());
 console.log(stack.isEmpty());
 console.log(stack.size());
 console.log(stack.pop());
 console.log(stack.toArray());
 console.log(stack.size());
 stack.clear();  //clear the stack
 console.log(stack.isEmpty());