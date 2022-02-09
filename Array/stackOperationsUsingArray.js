class Stack {
  constructor() {
    this.stack = [];
  }
  insertionInStack(val) {
    // insert at last of an array.
    this.stack.push(val);
    console.log(this.stack);
    return this.stack;
  }
  deletionInStack() {
    // delete from last Of an array.
    this.stack.pop();
    console.log(this.stack);
    return this.stack;
  }
  peekInStack() {
    // return the last element of an array.
    console.log(this.stack[this.stack.length - 1]);
    return this.stack[this.stack.length - 1];
  }
  isStackEmpty() {
    // returns true if the stack is empty.
    console.log(!this.stack.length);
    return !this.stack.length;
  }
}
let object = new Stack();
object.insertionInStack(1);
object.insertionInStack(2);
object.insertionInStack(3);
object.insertionInStack(4);
object.insertionInStack(5);
object.deletionInStack();
object.deletionInStack();
object.deletionInStack();
object.peekInStack();
object.isStackEmpty();
object.deletionInStack();
object.deletionInStack();
object.isStackEmpty();
