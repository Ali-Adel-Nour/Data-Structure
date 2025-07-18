
var MyStack = function() {
   this.elements = [] 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.elements.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.elements.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
       if (this.elements.length > 0) {
        return this.elements[this.elements.length - 1]; 
    }
  return null;
};
