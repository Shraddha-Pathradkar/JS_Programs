//FREQUENCY COUNTING

//LESS EFFECIENT SOLUTION

squareSums = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    let index = arr2.indexOf(val ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

//MORE EFFECIENT SOLUTION -- O(N)

squareSums = (arr1, arr2) => {
  let obj1 = {};
  let obj2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let val in obj1) {
    if (!(val ** 2 in obj2)) {
      return false;
    }
    if (obj1[val ** 2] !== obj2[val]) {
      return false;
    }
  }
  return true;
};

console.log(squareSums([1, 2, 2, 5], [1, 25, 4, 4, 7]));
