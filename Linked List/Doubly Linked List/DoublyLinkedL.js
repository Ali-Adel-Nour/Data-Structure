class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Method to add a new node to the beginning of the list
  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }
  // Method to add a new node at the specified index
  insert(index, data) {
    if (index < 0) {
      console.log("Invalid index. Index should be a non-negative integer.");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode) {
      if (currentIndex === index - 1) {
        const newNode = new Node(data);

        newNode.prev = currentNode;
        newNode.next = currentNode.next;

        if (currentNode.next) {
          currentNode.next.prev = newNode;
        } else {
          this.tail = newNode;
        }

        currentNode.next = newNode;
        break;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    if (currentIndex < index - 1) {
      console.log("Index out of bounds. Node not inserted.");
    }
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }

  // Method to delete a node from the list
  delete(data) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.data === data) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
        }

        break;
      }

      currentNode = currentNode.next;
    }
  }



  // Method to print the list in forward direction
  printForward() {
    let currentNode = this.head;
    let result = '';

    while (currentNode) {
      result += `${currentNode.data} -> `;
      currentNode = currentNode.next;
    }

    console.log(result + 'null');
  }




  // Method to print the list in backward direction
  printBackward() {
    let currentNode = this.tail;
    let result = '';

    while (currentNode) {
      result += `${currentNode.data} -> `;
      currentNode = currentNode.prev;
    }

    console.log('null <- ' + result);
  }
}

// Example usage:
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.insert(1,50)
list.delete(2)
list.reverse()
list.printForward();