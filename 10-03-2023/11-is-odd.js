/*

Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.

Write two versions of this function, one using conditionals (if) and one without using conditionals.

*/

let isOdd = num => {
    if (num % 2 !== 0) return true;
    return false;
  }

  console.log(isOdd(2)); // => false
  console.log(isOdd(5)); // => true
  console.log(isOdd(-17)); // => true
