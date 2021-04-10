// 551. Student Attendance Record I

// You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// The student is eligible for an attendance award if they meet both of the following criteria:
// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Return true if the student is eligible for an attendance award, or false otherwise.

// Example 1:
// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.

// Example 2:
// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
/**
 * @param {string} s
 * @return {boolean}
 */
// var checkRecord = function(s) {
//     let obj = {};
//     for(const c of s) {
//         obj[c] = obj[c] ? ++obj[c] : 1;
//         if(c === 'P' || c === 'A') obj['L'] = 0;
//         if(obj['A'] >= 2 || obj['L'] >= 3) return false;
//     }
//     return true;
// };

// var checkRecord = function(s) {
//     return s.split('A').length <= 2 && s.indexOf('LLL') === -1;
// };

var checkRecord = function(s) {
    if(s.indexOf('LLL') !== -1) return false;
    let wasAbsent = false;
    for(const c of s) {
        if(c === 'A') {
            if(wasAbsent) return false;
            wasAbsent = true;
        }
    }
    return true;
};
