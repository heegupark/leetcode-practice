// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let lookup={};
    for(let i=0;i<inorder.length;i++) lookup[inorder[i]]=i;
    const helper = (preStart, preEnd, inStart, inEnd) => {
        if(preStart > preEnd || inStart > inEnd) return null;
        const value = preorder[preStart];
        const index = lookup[value];
        const count = index - inStart;
        const root = new TreeNode(value);
        root.left = helper(preStart + 1, preStart + count, inStart, index - 1);
        root.right = helper(preStart + count + 1, preEnd, index + 1, inEnd);
        return root;
    }
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
