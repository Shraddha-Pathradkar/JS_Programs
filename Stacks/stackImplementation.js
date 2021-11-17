class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    else if (this.last === this.first) {
      this.last = null;
      this.size--;
      return null;
    } else {
      var temp = this.first.next;
      this.first.next = null;
      this.first = temp;
      this.size--;
    }
    return this;
  }
}

var stack = new Stack();
