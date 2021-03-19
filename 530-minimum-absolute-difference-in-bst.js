// 530. Minimum Absolute Difference in BST

// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.
// Example:
// Input:
//    1
//     \
//      3
//     /
//    2

// Output:
// 1
// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let nodes = [];
    dfs(root);
    let result = Infinity;
    for(let i = 1; i < nodes.length; i++) result = Math.min(result, nodes[i] - nodes[i-1]);
    function dfs(root) {
        if(root !== null) {
            dfs(root.left);
            nodes.push(root.val);
            dfs(root.right);
        }
    }
    return result;
};
