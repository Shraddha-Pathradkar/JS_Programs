class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Trees {
  constructor(val) {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // if value already present.
        if (current.val === value) return "already exists";
        //traverse left if smaller.
        if (value < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
        //traverse right if greater.
        else if (value > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    else {
      let current = this.root;
      while (current) {
        // if value already present.
        if (current.val === value) return true;
        //traverse left if smaller.
        if (value < current.val) {
          current = current.left;
        }
        //traverse right if greater.
        if (value > current.val) {
          current = current.right;
        }
      }
    }
    return false;
  }
}
var tree = new Trees();

tree.insert(25);
tree.insert(8);
tree.insert(10);
tree.insert(5);
tree.insert(35);
tree.insert(45);
tree.insert(40);
