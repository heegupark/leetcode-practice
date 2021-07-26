// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2
// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
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
var minDepth = function(root) {
    if(!root) return 0;
    let min = Infinity;
    const helper = (root, depth) => {
        if(!root.left && !root.right) min = Math.min(min, depth);
        if(root.left) helper(root.left, depth + 1);
        if(root.right) helper(root.right, depth + 1);
    }
    helper(root, 1);
    return min;
};
