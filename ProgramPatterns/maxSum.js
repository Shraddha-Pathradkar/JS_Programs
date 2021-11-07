// find maximum sum of given digits

// sliding window
// O(n)
findMaxSum = (arr, num) => {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

findMaxSum([19, 8, 9, 9, 0, 7, 3, 1, 3, 88], 3);
