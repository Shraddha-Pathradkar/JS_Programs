// linked list based queue
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor(val) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
      this.size++;
    }
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    else if (this.last === this.first) {
      this.last = null;
      this.size--;
      return null;
    }
    var temp = this.first.next;
    this.first.next = null;
    this.first = temp;
    this.size--;
    return this;
  }
}
var queue = new Queue();
