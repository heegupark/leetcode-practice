// 461. Hamming Distance

// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
// Given two integers x and y, calculate the Hamming distance.
// Note:
// 0 ≤ x, y < 231.
// Example:
// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

// Using bitwise method
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y, sum = 0; // XOR operator(^) returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.
    while(xor > 0) {
     sum += xor & 1;
     xor = xor >> 1;
    }
    return sum;
};

// Using general way
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0;
    while (x || y) {
        x = x / 2;
        y = y / 2;
        if (x % 1 - y % 1 !== 0) {
            count += 1;
        };
        x = parseInt(x);
        y = parseInt(y);
    };
    return count;
};
