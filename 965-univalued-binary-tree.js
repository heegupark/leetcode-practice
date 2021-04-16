// 965. Univalued Binary Tree

// A binary tree is univalued if every node in the tree has the same value.
// Return true if and only if the given tree is univalued.

// Example 1:
// Input: [1,1,1,1,1,null,1]
// Output: true

// Example 2:
// Input: [2,2,2,5,2]
// Output: false
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    if(!root) return false;
    const DFS = (node, val) => {
        if(!node) return true;
        if(node.val !== val) return false;
        return DFS(node.left, val) && DFS(node.right, val);
    }
    return DFS(root, root.val);
};
