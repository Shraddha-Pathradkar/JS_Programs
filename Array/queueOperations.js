class Queue {
  constructor() {
    this.queue = [];
  }
  InsertionInQueue(val) {
    //enqueue
    this.queue.push(val);
    console.log(this.queue);
    return this.queue;
  }
  deletionInQueue() {
    //dequeue
    this.queue.shift();
    console.log(this.queue);
    return this.queue;
  }
}
let object = new Queue();
object.InsertionInQueue(1);
object.InsertionInQueue(2);
object.InsertionInQueue(3);
object.InsertionInQueue(4);
object.InsertionInQueue(5);
object.deletionInQueue();
object.deletionInQueue();
object.deletionInQueue();
object.deletionInQueue();
object.deletionInQueue();
