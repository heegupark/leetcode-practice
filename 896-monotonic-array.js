// 896. Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.

// Example 1:
// Input: [1,2,2,3]
// Output: true

// Example 2:
// Input: [6,5,4,4]
// Output: true

// Example 3:
// Input: [1,3,2]
// Output: false

// Example 4:
// Input: [1,2,4,5]
// Output: true

// Example 5:
// Input: [1,1,1]
// Output: true
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let direction = '';
    let index = 1;
    while(index < A.length) {
        if(!direction && A[index-1] < A[index]) direction = 'UP';
        if(!direction && A[index-1] > A[index]) direction = 'DOWN';
        if(direction === 'UP' && A[index-1] > A[index]) return false;
        if(direction === 'DOWN' && A[index-1] < A[index]) return false;
        index++;
    }
    return true;
};

var isMonotonic = function(A) {
    let increase = true, decrease = true;
    for(let i = 0; i < A.length - 1; i++) {
        if(A[i] > A[i + 1]) increase = false;
        if(A[i] < A[i + 1]) decrease = false;
    }
    return increase || decrease;
};
