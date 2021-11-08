function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] > val) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}
binarySearch([1, 3, 5, 63, 67, 77, 89, 90], 67);
