// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// function countBs(str) {
//   let count = 0
//
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'B') {
//       count += 1
//     }
//   }
//
//   return count
// }
//
// console.log(countBs('BBC'));
//
// console.log(countBs('BlueBerry bunny Basket BaBBle'));

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countChar(str, char) {
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1
    }
  }

  return count
}

console.log(countChar('BBC', 'C'));

console.log(countChar('BlueBerry bunny Basket BaBBle', 'n'));

// Example:

// console.log(countBs("BBC"));
// → 2
// console.log(countChar("kakkerlak", "k"));
// → 4

function countBs(str) {
  return countChar(str, 'B')
}

console.log(countBs('BBC'));

console.log(countBs('BlueBerry bunny Basket BaBBle'));
