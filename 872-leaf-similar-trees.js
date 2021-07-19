// 872. Leaf-Similar Trees

// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
// For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

// Example 1:
// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true
// Example 2:
// Input: root1 = [1], root2 = [1]
// Output: true
// Example 3:
// Input: root1 = [1], root2 = [2]
// Output: false
// Example 4:
// Input: root1 = [1,2], root2 = [2,2]
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const result1 = [], result2 = [];
    const dfs = (node, array) => {
        if(!node.left && !node.right) return array.push(node.val);
        if(node.left) dfs(node.left, array);
        if(node.right) dfs(node.right, array);
    };
    dfs(root1, result1);
    dfs(root2, result2);
    return result1.join('|') === result2.join('|');
};
