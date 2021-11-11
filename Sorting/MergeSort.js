//Time Complexity : O(n log n)
//Space complexity : O(n)

const Merging = (left, right) => {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result[k] = left[i];
      i++;
    } else {
      result[k] = right[j];
      j++;
    }
    k++;
  }
  while (i < left.length) {
    result[k] = left[i];
    i++;
    k++;
  }
  while (j < right.length) {
    result[k] = right[j];
    j++;
    k++;
  }
  return result;
};

const MergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));
  return Merging(left, right);
};

MergeSort([12, 23, 4, 55, 9, 5, 7, 0, -4, 78]);
