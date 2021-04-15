// 747. Largest Number At Least Twice of Others

// You are given an integer array nums where the largest integer is unique.
// Find whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, otherwise, return -1.

// Example 1:
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer and for every other number in the array x,
// 6 is more than twice as big as x.
// The index of value 6 is 1, so we return 1.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is not at least as big as twice the value of 3, so we return -1.
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length === 1) return 0;
    const temp = [...nums], length = nums.length-1;
    nums.sort((a,b) => a-b);
    return nums[length] >= nums[length-1] * 2 ? temp.indexOf(nums[length]) : -1;
};
