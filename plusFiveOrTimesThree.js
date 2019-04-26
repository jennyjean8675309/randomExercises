//Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?

//Example: the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

//Recursive_solution:

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(13))

/*
On call to findSolution(13) the function returns another function call:
  find(1, "1")

On first call to find(1, "1"):
  function find(1, "1") {
    if (1 == 13) {
      return history;
    } else if (1 > target) {
      return null;
    } else {
      return find(1 + 5 (6), '(1 + 5)') || find (1 * 3 (3), '(1 * 3)')

              (path 1)                          (path 2)

      *The return statement is conditional - does this mean that the first option runs (if) until it equals null,
      and then the second option runs???
    }
  }

  Path 1 (first iteration)
  find(6, '(1 + 5)') {
    if (6 == 13) {
      return history;
    } else if (6 > 13) {
      return null;
    } else {
      return find(6 + 5 (11), '((1 + 5) + 5)') || find(6 * 3 (18), '((1 + 5) * 3)')

                      (path 1-1)                        (path 1-2)
    }
  }

  Path 1-1
  find(11, '((1 + 5) + 5)') {
    if (11 == 13) {
      return history;
    } else if (11 > 13) {
    return null;
    } else {
      return find(11 + 5 (16), '(((1 + 5) + 5) + 5)') || find(11 * 3 (33), '(((1 + 5) + 5) * 3)')

                      (path 1-1-1)                                (path 1-1-2)
    }
  }

  Path 1-1-1
  find(16, '(((1 + 5) + 5) + 5)') {
    if (16 == 13) {
      return history;
    } else if (16 > 13) {
      return null;
    } else ...
  }

  *Here, the second condition is met (16 > 13), so the function would return null, and JS will now run the most recent second option (path 1-1-2)

  Path 1-1-2
  find(33, '(((1 + 5) + 5) * 3)') {
    if (33 == 13) {
      return history;
    } else if (33 > 13) {
      return null;
    } else ...
  }

  *Here again, the second condition is met (33 > 13), so the function returns null, and now the most recent unexplored option runs (path 1-2)

  Path 1-2
  find(18, ((1 + 5) * 3)) {
    if (18 == 13) {
      return history;
    } else if (18 > 13) {
      return null;
    } else ...
  }

  *Second condition (18 > 13) is met, so the function returns null, and the most recent unexplored option runs (path 2)

  Path 2
  find(3, '(1 * 3)') {
    if (3 == target) {
      return history;
    } else if (3 > 13) {
      return null;
    } else {
      return find(3 + 5 (8), '((1 * 3) + 5)' ) || find(3 * 3 (9), '((1 * 3) * 3)')

                      path 2-1                            path 2-2
    }
  }

  Path 2-1
  find(8, '((1 * 3) + 5)') {
    if (8 == 13) {
      return history;
    } else if (8 > 13) {
      return null;
    } else {
      return find(8 + 5 (13), '(((1 * 3) + 5) + 5)') || find(8 * 3 (24), '(((1 * 3) + 5) * 3)')

                      path 2-1-1                                path 2-1-2
    }
  }

  Path 2-1-1
  find(13, '(((1 * 3) + 5) + 5)') {
    if (13 == 13) {
      return history;
    } else if ...
  }

  *Here, finally, the condition is met to return something other than null, and our function returns the history that produced the result of adding to the target
  '(((1 * 3) + 5) + 5)'
*/
