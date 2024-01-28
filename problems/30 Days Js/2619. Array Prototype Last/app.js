//Implementation 1:

Array.prototype.last = function() {
  if (this.length === 0) {
  return -1;
} else {
  return this[this.length - 1];
}
};

//using ternary operator
Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};

//using slice

Array.prototype.last = function() {
  return this.length ? this.slice(-1)[0] : -1;
};