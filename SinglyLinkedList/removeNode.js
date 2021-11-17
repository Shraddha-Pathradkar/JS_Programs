// get node buy index
//How do you find the middle element of a singly linked list in one pass?

// time complexity - O(1) or O(n)
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
  shift() {
    if (!this.head) return undefined;
    var currenHead = this.head;
    this.head = currenHead.next;
  }
  removeNode(pos) {
    let i = 0;
    let current = this.head;
    let prev = current;
    if (pos === 0) {
      return this.shift();
    }
    while (current) {
      if (pos === i) {
        prev.next = current.next;
        current.next = null;
        return this.head;
      }
      prev = current;
      current = current.next;
      i++;
    }
    return undefined;
  }
}
var list = new SinglyLinkedList();
list.push("HI");
list.push("THERE");
list.push("HEY");
list.push("HELLO");
