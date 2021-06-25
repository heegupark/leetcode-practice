// 16. 3Sum Closest

// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestNum = undefined;
    for(i = 0; i < nums.length - 2; i++) {
      let left = i + 1, right = nums.length - 1;
      while(left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if(closestNum === undefined) closestNum = sum;
        else if (Math.abs(sum - target) < Math.abs(closestNum - target)) closestNum = sum;
        if (sum < target)  left++;
        else if (sum > target) right--;
        else return target;
      }
    }
    return closestNum;
};
