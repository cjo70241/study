function factorial(num) {
  if (num == 0) return 1;
  return num * factorial(num - 1);
  
}
// 3 + (2 + 1( +0)) = 6

console.log(factorial(4));