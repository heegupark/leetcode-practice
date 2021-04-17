// 441. Arranging Coins

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:
// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.

// Example 2:
// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let a = 1, step = 1;
    while(n>0) {
        n -= a;
        a++;
        if(n < a) return step;
        step++;
    }
    return 1;
};
var arrangeCoins = function(n) {
    let sum = 0, i = 1;
    while (sum <= n) {
        sum += i;
        i++;
    }
    return i - 2;
};
