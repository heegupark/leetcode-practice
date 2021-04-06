// 504. Base 7

// Given an integer, return its base 7 string representation.
// Example 1:
// Input: 100
// Output: "202"

// Example 2:
// Input: -7
// Output: "-10"
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if(num === 0) return "0";

  let str = '';
  const isNegative = num < 0;
  num = isNegative ? num * -1 : num;

  while (num > 0) {
    str = (num % 7) + str;
    num = Math.floor(num / 7);
  }

  return isNegative ? `-${str}` : str;
};
