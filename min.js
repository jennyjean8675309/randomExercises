// Write a function min that takes two arguments and returns their minimum.

// Example:

// console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10

function min(num1, num2) {
  if (num1 < num2) {
    return num1
  } else if (num2 < num1) {
    return num2
  } else {
    return 'The numbers are equal.'
  }
}

console.log(min(5, 27));

console.log(min(284, 6));

console.log(min(3, 3));
