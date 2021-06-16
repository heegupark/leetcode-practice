// 414. Third Maximum Number

// Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: nums = [1,2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => a-b);
    const array = Array.from(new Set(nums));
    return array.length <= 2 ? array[array.length-1] : array[array.length-3];
};
