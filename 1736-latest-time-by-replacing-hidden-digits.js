// 1736. Latest Time by Replacing Hidden Digits

// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).
// The valid times are those inclusively between 00:00 and 23:59.
// Return the latest valid time you can get from time by replacing the hidden digits.

// Example 1:
// Input: time = "2?:?0"
// Output: "23:50"
// Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.

// Example 2:
// Input: time = "0?:3?"
// Output: "09:39"

// Example 3:
// Input: time = "1?:22"
// Output: "19:22"

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    let result = '';
    if(time[0] === '?') {
        if(Number(time[1]) > 3) result += '1';
        else result += '2';
    } else {
        result += time[0];
    }
    if(time[1] === '?') {
        if(result[0] === '2') result += '3';
        else result += '9';
    } else {
        result += time[1];
    }
    result += time[2];
    if(time[3] === '?') result += '5';
    else result += time[3];
    if(time[4] === '?') result += '9';
    else result += time[4];
    return result;
};
