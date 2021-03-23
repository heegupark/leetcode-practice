// 653. Two Sum IV - Input is a BST

// Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// Example 3:
// Input: root = [2,1,3], k = 4
// Output: true

// Example 4:
// Input: root = [2,1,3], k = 1
// Output: false

// Example 5:
// Input: root = [2,1,3], k = 3
// Output: true
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let sum = {};
    function dfs(root) {
        if(!root) return false;
        if(sum[k-root.val]) return true;
        else sum[root.val] = true;
        return dfs(root.left) || dfs(root.right);
    }
    return dfs(root);
};
