// 415. Add Strings

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = [], up = 0;
    const arr1 = num1.split(''), arr2 = num2.split('');
    while(arr1.length > 0 || arr2.length > 0) {
        const temp = Number(arr1.length > 0 ? arr1.pop() : 0) + Number(arr2.length > 0 ? arr2.pop() : 0) + up;
        result.unshift(temp > 9 ? temp -10 : temp);
        up = temp > 9 ? 1 : 0;
    }
    if(up) result.unshift(up)
    return result.join('');
};
