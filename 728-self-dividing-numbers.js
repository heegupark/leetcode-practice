// 728. Self Dividing Numbers

// A self-dividing number is a number that is divisible by every digit it contains.
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// Also, a self-dividing number is not allowed to contain the digit zero.
// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];
    for(let i=left;i<=right;i++) {
        const str = i.toString();
        let isSelfDividing = true;
        for(let j=0;j<str.length;j++) {
           if(i%Number(str[j])!==0)  isSelfDividing = false;
        }
        if(isSelfDividing) result.push(i);
    }
    return result;
};
