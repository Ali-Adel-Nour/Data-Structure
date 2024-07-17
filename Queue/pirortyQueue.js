class Queue {

  constructor(){
    this.items = {};

    this.rear = 0
    this.front = 0

  }

  enqueue(element){
    this.items[this.rear] = element;
    this.rear++

  }

  dequeue(){
    if(this.front === this.rear){
      return null
    }

    const data = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return data
  }

  isEmpty(){
    return this.rear - this.front === 0
  }

  peek(){
    return this.items[this.front]
  }

  size(){
    return this.rear - this.front
  }

  print(){
    console.log(this.items)
  }
}

const queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
 queue.print();