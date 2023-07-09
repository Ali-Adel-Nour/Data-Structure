class Node {
  constructor(val) {

    this.val = val;
    this.next = null;
  }

}

class LinkedList {
  constructor() {

    this.head = null
}

append(val) {
 if( this.head ===null){

 this.head= new Node(val);
 return
}
this._append(val,this.head);
}
_append(val,curr){
  if(curr.next === null){
    curr.next = new Node(val);
    return
  }
  this._append(val,curr.next)
}
print(){
const output = this._print(this.head);
console.log(output);
}

_print(curr){
  if(curr === null)
    return '';
    return curr.val + '->'+this._print(curr.next)

}

contains(target) {
  return this._contains(target, this.head);
}

_contains(target, curr) {
  if (curr === null) {
    return false;
  }
  if (curr.val === target) {
    return true;
  }
  return this._contains(target, curr.next);
}
}
const list = new LinkedList()

list.append('10')
list.append('20')
list.append('30')

list.print()
console.log(list.contains("a"))
console.log(list.contains("z"))


//write a fucntion sum the head of Linked List

/*function sumList(head) {
  let sum = 0;
  let curr = head;

  while (curr !== null) {
    sum += parseInt(curr.val);
    curr = curr.next;
  }

  return sum;

}
//Time O(n) Space(1)

*/
//ٌRecusive
function sumList(curr) {
  if (curr === null) {
    return 0;
  }

  return parseInt(curr.val) + sumList(curr.next);
}

//Time O(n)  Space O(n)
console.log(sumList(list.head));