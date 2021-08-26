// 67. Add Binary

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let up = 0;
    const arrA = a.split(''), arrB = b.split(''), result = [];
    const calc = (sum) => {
        if(sum > 1) {
            result.unshift(sum-2);
            up = 1;
        } else {
            result.unshift(sum);
            up = 0;
        }
    };
    while(arrA.length > 0 && arrB.length > 0) calc(up + Number(arrA.pop()) + Number(arrB.pop()));
    while(arrA.length > 0) calc(up + Number(arrA.pop()));
    while(arrB.length > 0) calc(up + Number(arrB.pop()));
    if(up) result.unshift(up);
    return result.join('');
};
