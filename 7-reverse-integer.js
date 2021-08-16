// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const number = (Math.abs(x)).toString().split(''), resultArr = [];
    while(number.length) resultArr.push(number.pop());
    const result = Number(resultArr.join(''));
    if(result > Math.pow(2,31)) return 0;
    return x >=0 ? result : result * -1;
};
