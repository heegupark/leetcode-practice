// 1437. Check If All 1's Are at Least Length K Places Away

// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

// Example 1:
// Input: nums = [1,0,0,0,1,0,0,1], k = 2
// Output: true
// Explanation: Each of the 1s are at least 2 places away from each other.

// Example 2:
// Input: nums = [1,0,0,1,0,1], k = 2
// Output: false
// Explanation: The second 1 and third 1 are only one apart from each other.

// Example 3:
// Input: nums = [1,1,1,1,1], k = 0
// Output: true

// Example 4:
// Input: nums = [0,1,0,1], k = 1
// Output: true
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    let diff = 0;
    let isStarted = false;
    for(let a of nums) {
        if(a === 0) diff++;
        else if(isStarted && diff < k) return false;
        else {
            diff = 0;
            isStarted = true;
        }
    }
    return true;
};
