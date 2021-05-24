// 1539. Kth Missing Positive Number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Find the kth positive integer that is missing from this array.

// Example 1:
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

// Example 2:
// Input: arr = [1,2,3,4], k = 2
// Output: 6
// Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missing = 1;
    let index = 0;
    while(k>0) {
        const temp = arr[index];
        if(missing === temp) {
            index++;
        } else {
            k--;
        }
        missing++
        console.log(index,missing,k)
    }
    return missing-1;
};


console.log(findKthPositive([1,2,3,4],2))
var findKthPositive = function(arr, k) {
    let missing = 0;
    for(let i = 1; i <= arr.length + k; i++) {
        if (arr[i - 1 - missing] !== i) {
            missing++;
            if (missing === k) return i;
        }
    }
    return missing;
};
