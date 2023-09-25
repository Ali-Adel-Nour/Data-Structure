//Linked List

class ListNode {
  constructor(val, next=null) {
      this.val = val
      this.next = next
  }
}
class MyCircularQueue {
  constructor(k) {
      this.maxSize = k
      this.size = 0
      this.head = null
      this.tail = null
  }
  enQueue(val) {
      if (this.isFull()) return false
      let newNode = new ListNode(val)
      if (this.isEmpty()) this.head = this.tail = newNode
      else this.tail.next = newNode, this.tail = this.tail.next
      this.size++
      return true
  }
  deQueue() {
      if (this.isEmpty()) return false
      this.head = this.head.next
      this.size--
      return true
  }
  Front() {
      return this.isEmpty() ? -1 : this.head.val
  }
  Rear() {
      return this.isEmpty() ? -1 : this.tail.val
  }
  isEmpty() {
      return (this.size === 0)
  }
  isFull() {
      return (this.size === this.maxSize)
  };
};

//Array
class MyCircularQueue {
    constructor(k) {
        this.data = new Uint16Array(k)
        this.maxSize = k
        this.head = 0
        this.tail = -1
    }
    enQueue(val) {
        if (this.isFull()) return false
        this.tail = (this.tail + 1) % this.maxSize
        this.data[this.tail] = val
        return true
    }
    deQueue() {
        if (this.isEmpty()) return false
        if (this.head === this.tail) this.head = 0, this.tail = -1
        else this.head = (this.head + 1) % this.maxSize
        return true
    }
    Front() {
        return this.isEmpty() ? -1 : this.data[this.head]
    }
    Rear() {
        return this.isEmpty() ? -1 : this.data[this.tail]
    }
    isEmpty() {
        return this.tail === -1
    }
    isFull() {
        return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head
    };
};

//Array

/*
class MyCircularQueue {
  constructor(k) {
      this.data = new Uint16Array(k)
      this.maxSize = k
      this.head = 0
      this.tail = -1
  }
  enQueue(val) {
      if (this.isFull()) return false
      this.tail = (this.tail + 1) % this.maxSize
      this.data[this.tail] = val
      return true
  }
  deQueue() {
      if (this.isEmpty()) return false
      if (this.head === this.tail) this.head = 0, this.tail = -1
      else this.head = (this.head + 1) % this.maxSize
      return true
  }
  Front() {
      return this.isEmpty() ? -1 : this.data[this.head]
  }
  Rear() {
      return this.isEmpty() ? -1 : this.data[this.tail]
  }
  isEmpty() {
      return this.tail === -1
  }
  isFull() {
      return !this.isEmpty() && (this.tail + 1) % this.maxSize === this.head
  };
};
Javascript Code w/ Linked List:
class ListNode {
  constructor(val, next=null) {
      this.val = val
      this.next = next
  }
}
class MyCircularQueue {
  constructor(k) {
      this.maxSize = k
      this.size = 0
      this.head = null
      this.tail = null
  }
  enQueue(val) {
      if (this.isFull()) return false
      let newNode = new ListNode(val)
      if (this.isEmpty()) this.head = this.tail = newNode
      else this.tail.next = newNode, this.tail = this.tail.next
      this.size++
      return true
  }
  deQueue() {
      if (this.isEmpty()) return false
      this.head = this.head.next
      this.size--
      return true
  }
  Front() {
      return this.isEmpty() ? -1 : this.head.val
  }
  Rear() {
      return this.isEmpty() ? -1 : this.tail.val
  }
  isEmpty() {
      return (this.size === 0)
  }
  isFull() {
      return (this.size === this.maxSize)
  };
};

*/