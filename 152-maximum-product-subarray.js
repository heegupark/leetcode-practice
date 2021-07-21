// 152. Maximum Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// It is guaranteed that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.
// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity, curMax = 1, curMin = 1;
    for(let i=0;i<nums.length;i++) {
        let prev = curMax;
        curMax = Math.max(nums[i], prev * nums[i], curMin * nums[i]);
        curMin = Math.min(nums[i], prev * nums[i], curMin * nums[i]);
        max = Math.max(curMax, max);
    }
    return max;
};
