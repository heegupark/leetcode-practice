// 693. Binary Number with Alternating Bits

// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

// Example 1:
// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101

// Example 2:
// Input: n = 7
// Output: false
// Explanation: The binary representation of 7 is: 111.

// Example 3:
// Input: n = 11
// Output: false
// Explanation: The binary representation of 11 is: 1011.

// Example 4:
// Input: n = 10
// Output: true
// Explanation: The binary representation of 10 is: 1010.

// Example 5:
// Input: n = 3
// Output: false
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const bin = n.toString(2);
    for(let i=1;i<bin.length;i++) if(bin[i-1] === bin[i]) return false;
    return true;
};


/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    return n.toString(2).indexOf('00') === -1 && n.toString(2).indexOf('11') === -1;
};
