// Correlation - a measure of dependence between statistical variables.
// Usually expressed as a value that ranges from -1 to 1.
// 0 - not related
// 1 - a perfect relationship (if you know one, you know the other)
// -1 - also a perfect relationship, only opposites (when one is true, the other is false)

// phi coefficient - a formula whose input is a frequency table containing the number of times the different combinations of the variables were observed.
// The output of this formula is a number between 1 and -1 that describes the correlation.

// Frequency table:

//  squirrel: false, pizza: false (76) | squirrel: false, pizza: true (9)
//  squirrel: true, pizza: false (4)   | squirrel: true, pizza: true (1)

// If we call this table n, we can compute the phi coefficient using the following formula:


// ϕ =
// n11n00 − n10n01 /  the square root of (n1•n0•n•1n•0)


// The notation, n01, indicates the number of measurements where the first variable (squirrelness) is false, and the second variable (pizza) is true - so 9
// The value n1. refers to the sum of all measurements where the first variable (squirrelness) is true (5)
// Likewise, the value n.0 refers to the sum of all measurements where the second variable (pizza) is false (10) - basically the dot (.) in either the first or second position means to ignore either the first or second variable, respectively

// So, for our pizza table, the formula would look like:

// 1 (n11) * 76 (n00) - 4 (n10) * 9 (n01) / the square root of (5 (n1.) * 85 (n0.) * 10 (n.1) * 80 (n.0))
// 40 / the square root of (340,000)
// phi coefficient = 0.069

// Turning the frequency table into an array in JavaScript:
// binary 11 - where both variables are true is the number 3 in base 10
// binary 00 - where both variables are false is the number 0 in base 10
// binary 10 - where the first variable is true, and the second is false is the number 2 in base 10
// binary 01 - where the first variable is false, and the second is true is the number 1 in base 10

// The base 10 numbers then refer to the indices in an array - [76, 9, 4, 1]
// So the function that would compute the phi coefficient from such an array would look like this:

table = [76, 9, 4, 1]

function phi(table) {
  return ( (table[3] * table[0]) - (table[2] * table[1]) ) / Math.sqrt(
    (table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2])
  );
}

console.log('phi coefficient', phi(table))
