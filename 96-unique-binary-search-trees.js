// 96. Unique Binary Search Trees
/**
 * @param {number} n
 * @return {number}
 */
// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:
// Input: n = 3
// Output: 5

// Example 2:
// Input: n = 1
// Output: 1
var numTrees = function(n) {
    let map = { 0:1, 1:1 };
    for(let i=2;i<=n;i++) {
        let sum = 0;
        for(let j=0;j<i;j++) sum += map[j]*map[i-j-1];
        map[i]=sum;
    }
    return map[n];
};
