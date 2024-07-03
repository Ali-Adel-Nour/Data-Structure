var MyQueue = function() {
  this.elements = [];
};


MyQueue.prototype.push = function(x) {
  this.elements.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (this.elements.length > 0) {
      return this.elements.shift(); // Use shift() to remove the first element
  }
  return null; // Return null if the queue is empty
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.elements.length > 0) {
      return this.elements[0]; // Return the first element
  }
  return null; // Return null if the queue is empty
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.elements.length === 0;
};


