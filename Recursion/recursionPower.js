function power(num, pow) {
  if (pow === 0) return 1;
  else if (pow === 1) return num;
  return num * power(num, pow - 1);
}

power(2, 2); // 4
power(3, 3); //27
