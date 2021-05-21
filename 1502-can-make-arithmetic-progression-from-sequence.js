// 1502. Can Make Arithmetic Progression From Sequence

// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.
// Example 1:
// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

// Example 2:
// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b) => a-b);
    const result = [];
    for(let i=1;i<arr.length;i++) {
        result.push(arr[i]-arr[i-1])
    }
    return (new Set(result)).size === 1
};
