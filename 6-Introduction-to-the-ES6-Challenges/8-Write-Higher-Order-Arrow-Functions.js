// I learn more about arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((number) => number >= 0 && Number.isInteger(number));
  // change code above this line
  return squaredIntegers.map((number) => number * number);
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
