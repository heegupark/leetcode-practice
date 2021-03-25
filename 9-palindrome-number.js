// 9. Palindrome Number

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false;
    const str = x.toString();
    const length = str.length;
    for(let i=0;i<length/2;i++) if(str[i] !== str[length-i-1]) return false;
    return true;
};

var isPalindrome = function(x) {
    if(x<0) return false;
    const arr = x.toString().split('');
    while(arr.length > 1) {
        if(arr.shift() !== arr.pop()) return false;
    }
    return true;
};

var isPalindrome = function(x) {
    if (x < 0) return false;
    let m = x, res = 0;
    while(m > 0) {
        res = res * 10 + m % 10;
        m = Math.floor(m/10);
    }
    return res === x;
};
