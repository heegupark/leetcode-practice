// 637. Average of Levels in Binary Tree

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
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
var averageOfLevels = function(root) {
    let result = [], currentLevel = [];
    currentLevel.push(root);
    while(currentLevel.length > 0) {
        let num = currentLevel.length, sum = 0;
        let i = num;
        while(i > 0){
            let node = currentLevel.shift();
            sum += node.val;
            if(node.left) currentLevel.push(node.left);
            if(node.right) currentLevel.push(node.right);
            i--;
        }
        result.push(sum / num);
    }
    return result;
};
