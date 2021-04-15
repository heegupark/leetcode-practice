// 961. N-Repeated Element in Size 2N Array
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
// Return the element repeated N times.

// Example 1:
// Input: [1,2,3,3]
// Output: 3

// Example 2:
// Input: [2,1,2,5,3,2]
// Output: 2

// Example 3:
// Input: [5,1,5,2,5,3,5,4]
// Output: 5
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = {};
    let result = 0;
    for(let num of A) {
        if(map[num]) {
            map[num]++;
            if(map[num] === A.length/2) {
                result = num;
                break;
            }
        } else {
            map[num]=1
        }
    }
    return result;
};
