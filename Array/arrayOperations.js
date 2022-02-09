class Array {
  constructor() {
    this.arr = [];
  }
  insertion(val) {
    this.arr.push(val);
    return this.arr;
  }
  insertionAtGivenIndex(val, pos) {
    this.arr.splice(pos, 0, val);
    return this.arr;
  }
  deletionAtGivenIndex(pos) {
    this.arr = this.arr.filter((item, i) => i !== pos);
    return this.arr;
  }
  traverse() {
    this.arr.forEach((item) => {
      console.log(item);
    });
  }
  searchingByIndex(pos) {
    let element = this.arr.find((item, i) => i === pos);
    return element;
  }
  updateByIndex(val, pos) {
    this.arr.splice(pos, 1, val);
    return this.arr;
  }
}

let object = new Array();
object.insertion(1);
object.insertion(2);
object.insertion(3);
object.insertion(4);
object.insertion(5);
object.insertionAtGivenIndex(6, 2);
object.deletionAtGivenIndex(2);
object.searchingByIndex(2);
object.updateByIndex(6, 2);
