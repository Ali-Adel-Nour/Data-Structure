function Queue(){
  let items = [];

  //Add a new element in queue
  this.enqueue = (elm) => {
    items.push(elm);
  }

  //Remove element from the queue
  this.dequeue = () => {
    return items.shift();
  }

  //Return the first element from the queue
  this.front = () => {
    return items[0];
  }

  //Return the last element from the queue
  this.rear = () => {
    return items[items.length - 1];
  }

  //Check if queue is empty
  this.isEmpty = () => {
    return items.length == 0;
  }

  //Return the size of the queue
  this.size = () => {
   return items.length;
  }

  //Print the queue
  this.print = () => {
   console.log(items.toString());
  };

}