// 34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length - 1, first = -1, last = -1;
    while(start<=end) {
        let mid = Math.floor((start+end)/2);
        if(nums[mid] < target) {
            start = mid + 1
        } else if(nums[mid] > target) {
            end = mid - 1
        } else {
            let first = mid, last = mid
            while(nums[first] === target && first >= 0) first--;
            while(nums[last] === target && last < nums.length) last++;
            return [first+1, last-1];
        }
    }
    return [first, last];
};
