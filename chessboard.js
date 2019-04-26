/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. */

// function printChessboard(){
//   let chessboard = ' '
//
//   debugger;
//   while (chessboard.length < 64) {
//     if (chessboard[chessboard.length - 1] === ' ') {
//       chessboard = chessboard + '#'
//     } else {
//       chessboard = chessboard + ' '
//     }
//   }
//
//   //now I have the chessboard printed, I need to insert a newline after every 8th character
// }

//Hint says that I need a loop (for row characters) within a loop (for rows)
// function printChessboard() {
//   let chessboard = []
//
//   //first, create 8 rows
//   while (chessboard.length < 8) {
//     chessboard.push([])
//   }
//
//   //now insert characters into rows
//   for (row of chessboard) {
//     let chars;
//     if (chessboard.indexOf(row) % 2 === 0) {
//       chars = ' '
//     } else {
//       chars = '#'
//     }
//
//     while (chars.length < 8) {
//       if (chars[chars.length - 1] === ' ') {
//         chars = chars + '#'
//       } else {
//         chars = chars + ' '
//       }
//     }
//     chars = chars + '\n'
//     row.push(chars)
//   }
//
//   let flatChessboard = chessboard.reduce((acc, cur) => acc.concat(cur), [])
//   console.log(flatChessboard.reduce((acc, cur) => acc + cur, ''))
// }

//rewriting the function to accept an argument that accepts a size of height and width
function printChessboard(size) {
  let chessboard = []

  //first, create 8 rows
  while (chessboard.length < size) {
    chessboard.push([])
  }

  //now insert characters into rows
  for (row of chessboard) {
    let chars;
    if (chessboard.indexOf(row) % 2 === 0) {
      chars = ' '
    } else {
      chars = '#'
    }

    while (chars.length < size) {
      if (chars[chars.length - 1] === ' ') {
        chars = chars + '#'
      } else {
        chars = chars + ' '
      }
    }
    chars = chars + '\n'
    row.push(chars)
  }

  let flatChessboard = chessboard.reduce((acc, cur) => acc.concat(cur), [])
  console.log(flatChessboard.reduce((acc, cur) => acc + cur, ''))
}

printChessboard(20)
