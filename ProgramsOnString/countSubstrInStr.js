function naiveStringSearch(str, subStr) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (str[i + j] !== subStr[j]) break;
      if (j === subStr.length - 1) count++;
    }
  }
  return count;
}

naiveStringSearch("heyomgiamshromgaddhaomgyes", "omg");
