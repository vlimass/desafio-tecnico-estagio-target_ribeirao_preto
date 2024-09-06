function checkFibonacci(num) {
  if (num === 0 || num === 1) return true;

  let a = 0;
  let b = 1;
  let c = a + b; 

  while (c <= num) {
    if (c === num) return true;

    a = b;
    b = c;
    c = a + b;
  }

  return false;
}

// CASES:
const num1 = 1;
const num2 = 13;
const num3 = 20;
const num4 = 233;
const num5 = 234;
const num6 = 2584;

console.log(checkFibonacci(num1)); // true
console.log(checkFibonacci(num2)); // true
console.log(checkFibonacci(num3)); // false
console.log(checkFibonacci(num4)); // true
console.log(checkFibonacci(num5)); // false
console.log(checkFibonacci(num6)); // true