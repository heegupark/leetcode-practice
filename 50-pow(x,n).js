// 50. Pow(x, n)
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n === 0) return 1;
    if(n === 1) return x;
    if(n < 0 && x !== 0) return myPow(1/x, n*-1);
    if (n % 2 === 0) {
        const res = myPow(x, n / 2);
        return res * res;
    } else {
        return myPow(x, n - 1) * x;
    }
};
