// 99. Recover Binary Search Tree

// You are given the root of a binary search tree (BST), where exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.
// Follow up: A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?
// Example 1:
// Input: root = [1,3,null,null,2]
// Output: [3,1,null,null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

// Example 2:
// Input: root = [3,1,4,null,null,2]
// Output: [2,1,4,null,null,3]
// Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    if (!root) return;
    let current = root, preNode = '', preCurrentNode = '', first = '', second = '';
    while (current) {
        if (!current.left) {
            if (preCurrentNode && preCurrentNode.val > current.val) {
                if (!first) first = preCurrentNode;
                second = current;
            }
            preCurrentNode = current;
            current = current.right;
        } else {
            preNode = current.left;
            while (preNode.right && preNode.right.val !== current.val) preNode = preNode.right;
            if (!preNode.right) {
                preNode.right = current;
                current = current.left;
            } else {
                if (preCurrentNode && preCurrentNode.val > current.val) {
                    if (!first) first = preCurrentNode;
                    second = current;
                }
                preNode.right = null;
                preCurrentNode = current;
                current = current.right;
            }
        }
    }
    const temp = first.val;
    first.val = second.val;
    second.val = temp;
};
