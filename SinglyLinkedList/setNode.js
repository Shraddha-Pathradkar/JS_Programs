// get node buy index
//How do you find the middle element of a singly linked list in one pass?

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  setNode(index, val) {
    let i = 0;
    let current = this.head;
    while (current) {
      if (i === index) {
        current.val = val;
      }
      current = current.next;
      i++;
    }
    return null;
  }
}
var list = new SinglyLinkedList();
list.push("HI");
list.push("THERE");
list.push("HEY");
list.push("HELLO");
