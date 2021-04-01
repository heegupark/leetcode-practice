// 1154. Day of the Year

// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.
// Example 1:
// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.

// Example 2:
// Input: date = "2019-02-10"
// Output: 41

// Example 3:
// Input: date = "2003-03-01"
// Output: 60

// Example 4:
// Input: date = "2004-03-01"
// Output: 61
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const map = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const arr = date.split('-');
    let res = Number(arr[2]);
    for (let i=0; i<arr[1]-1; i++) res += map[i]
    if (arr[1]>2) {
        if (arr[0]%400===0) res++
        else if (arr[0]%100===0) res
        else if (arr[0]%4===0) res++
    }
    return res
};
