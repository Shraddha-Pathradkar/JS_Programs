// Finding unique number in array using two pointers

//O(N) time complexity

findUnique = (arr) => {
  let i = 0;
  let j = i + 1;
  if (arr.length === 0) {
    return 0;
  }
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
};

findUnique([1, 2, 3, 4, 5, 66]);
