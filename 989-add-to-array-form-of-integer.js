// 989. Add to Array-Form of Integer

// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 2:
// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// Example 3:
// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

// Example 4:
// Input: num = [9,9,9,9,9,9,9,9,9,9], k = 1
// Output: [1,0,0,0,0,0,0,0,0,0,0]
// Explanation: 9999999999 + 1 = 10000000000
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const tempArr = [], kArr = k.toString().split('');
    let up = 0;

    const getSum = (sum) => {
        if(sum > 9) {
            up = 1;
            sum -= 10;
        } else {
            up = 0;
        }
        tempArr.unshift(sum);
        return up;
    }

    while(kArr.length > 0 && num.length > 0) {
        const tempK = Number(kArr.pop()), tempN = Number(num.pop());
        up = getSum(up + tempK + tempN);
    }
    while(kArr.length>0) up = getSum(up + Number(kArr.pop()));
    while(num.length>0) up = getSum(up + Number(num.pop()));
    if(up) tempArr.unshift(up);
    return tempArr;
};
