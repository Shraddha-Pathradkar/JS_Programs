//Time Complexity : O(n^2)

const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let change = 0;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        change++;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (change === 0) break;
  }
  return arr;
};

const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let change = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        change++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (change === 0) break;
  }
  return arr;
};
BubbleSort([23, 45, 23, 66, 7, 4, 399, 22]);
