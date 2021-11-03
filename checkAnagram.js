checkAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of str2) {
    if (!obj1[val]) {
      return false;
    }
    obj1[val] -= 1;
  }

  return true;
};
