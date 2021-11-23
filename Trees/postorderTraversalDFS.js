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

  dfs() {
    let data = [];
    function traverse(root) {
      if (root) {
        traverse(root.left);
        traverse(root.right);
        data.push(root.val); // postorder
      }
    }
    traverse(this.root);
    return data;
  }
}
var tree = new Trees();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
