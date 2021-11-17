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
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }
  insertNode(pos, val) {
    let i = 0;
    let current = this.head;
    let prev = null;
    if (pos === 0) {
      return this.unshift(val);
    }
    while (current) {
      if (pos === i) {
        var newNode = new Node(val);
        prev.next = newNode;
        newNode.next = current;
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
