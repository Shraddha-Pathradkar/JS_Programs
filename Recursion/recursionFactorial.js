const factorial = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result = result * i;
  }
  return result;
};

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

factorial(4);
