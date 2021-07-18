// 485. Max Consecutive Ones

// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0, count = 0;
    for(let n of nums) {
        if(n === 0) {
            max = Math.max(max, count);
            count = 0;
        } else {
            count++;
        }
    }
    return Math.max(max, count);
};
