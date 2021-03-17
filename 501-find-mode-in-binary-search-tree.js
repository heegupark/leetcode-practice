// 501. Find Mode in Binary Search Tree

// Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
// If the tree has more than one mode, return them in any order.
// Assume a BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than or equal to the node's key.
// The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [1,null,2,2]
// Output: [2]

// Example 2:
// Input: root = [0]
// Output: [0]
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
 * @return {number[]}
 */
var findMode = function(root) {
    let max = 1, hash = {}, result = [];
    function traverse(node) {
        if (hash[node.val]) {
            hash[node.val] += 1;
            max = Math.max(max, hash[node.val]);
        } else {
            hash[node.val] = 1;
        };
        node.left && traverse(node.left);
        node.right && traverse(node.right);
    };
    root && traverse(root);
    for (let prop in hash) hash[prop] === max && result.push(prop);
    return result;

};
