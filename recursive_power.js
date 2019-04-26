function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3))

// On first iteration:
// exponent (3) !== 0
//    2 * power(2, 2)     2 * 4 = 8
// On second iteration:
// exponent (2) !== 0
//    2 * power(2, 1)     2 * 2 = 4
// On third iteration:
// exponent (1) !== 0
//    2 * power(2, 0)     2 * 1 = 2
// On fourth iteration:
// exponent (0) === 0
//    returns 1

// Then goes back up the stack ^^^^^
