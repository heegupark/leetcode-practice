// 106. Construct Binary Tree from Inorder and Postorder Traversal
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:
// Input: inorder = [-1], postorder = [-1]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
        const helper = (inorder, postorder, istart, iend, pstart, pend) =>{
            if(istart === iend) return null;
            else if(pstart === pend) return null;
            const curNodeVal = postorder[pend - 1];
            const inOffset = inorder.indexOf(curNodeVal) - istart;
            const leftNode = helper(inorder, postorder, istart, istart + inOffset, pstart, pstart + inOffset);
            const rightNode = helper(inorder, postorder, istart + inOffset + 1, iend, pstart + inOffset, pend - 1);
            return new TreeNode(curNodeVal, leftNode, rightNode);
        };
    return helper(inorder, postorder, 0, inorder.length, 0, postorder.length);
};
