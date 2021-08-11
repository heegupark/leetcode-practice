// 31. Next Permutation

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
// The replacement must be in place and use only constant extra memory.

// Example 1:
// Input: nums = [1,2,3]
// Output: [1,3,2]

// Example 2:
// Input: nums = [3,2,1]
// Output: [1,2,3]

// Example 3:
// Input: nums = [1,1,5]
// Output: [1,5,1]

// Example 4:
// Input: nums = [1]
// Output: [1]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len = nums.length -1;
    const reverse = (idx) => {
        let start = idx, end = len;
        while(start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    const nextLarge = (index) => {
        for(let i = len; i > index; i--)  if(nums[i] > nums[index]) return i;
    }

    for(let i = len; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            const large = nextLarge(i);
            [nums[i], nums[large]] = [nums[large], nums[i]];
            reverse(i+1);
            return;
        }
    }

	// If there is no next permutation reverse the arr
    nums.reverse()
};
