const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
BubbleSort([23, 45, 23, 66, 7, 4, 399, 22]);
