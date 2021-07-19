// 43. Multiply Strings

// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

// Example 1:
// Input: num1 = "2", num2 = "3"
// Output: "6"

// Example 2:
// Input: num1 = "123", num2 = "456"
// Output: "56088"
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(!num1 || !num2) return '0';
    let len1 = num1.length, len2 = num2.length;
    let result = new Array(len1 + len2).fill(0);
    for(let i=len1-1;i>=0;i--) {
        for(let j=len2-1;j>=0;j--) {
            let p1 = i+j, p2 = i+j+1;
            let sum = Number(num1[i]) * Number(num2[j]) + result[p2] + result[p1] * 10;
            result[p1] = Math.floor(sum / 10), result[p2] = sum % 10;
        }
    }
    while(!result[0] && result.length>1) result.shift();
    return result.join('');
};
