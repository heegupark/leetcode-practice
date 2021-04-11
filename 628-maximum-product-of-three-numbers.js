// 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    const length = nums.length;
    nums.sort((a, b) => b - a);
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[length-1] * nums[length-2]);
};
