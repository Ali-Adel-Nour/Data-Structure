//First, initialize the object that stores the elements of the queue (elements) and two variables for tracking the head and tail in the constructor:
class Queue {
  constructor(){
    this.elements = {}
    this.head = 0
    this.tail = 0
  }
  //Second, enqueue an element by adding it to the elements object to the end of the queue:
  enqueue(element){
    this.elements[this.tail] = element
    this.tail++
  }
  //Third remove an element from the queue

  dequeue(){
    const item = this.elements[this.head]
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  //Fourth, define the peek() method that accesses the element at the front of the queue:

peek(){
  return this.elements[this.head];
}
//Fifth, get the length of the queue:

get length(){
  return this.tail - this.head
}

//The queue is empty when the length is zero.
get isEmpty() {
  return this.tail - this.head;
}
}
let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
// get the current item at the front of the queue
console.log(q.peek()); // 1

// get the current length of queue
console.log(q.length); // 7

// dequeue all elements
while (!q.isEmpty) {
  console.log(q.dequeue());
}
