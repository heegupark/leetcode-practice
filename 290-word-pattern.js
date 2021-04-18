// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

// Example 4:
// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let obj = {};
    const sArr = s.split(' ');
    if(pattern.length !== sArr.length) return false;
    for(let i=0;i<pattern.length;i++) {
        if(obj[pattern[i]]) {
            obj[pattern[i]] = [...obj[pattern[i]], i];
        } else {
            obj[pattern[i]] = [i];
        }
    }
    let prev = [];
    for(const key in obj) {
        for(const a of prev) {
            if(a !== key && sArr[obj[key][0]] === sArr[obj[a][0]]) return false;
        }
        for(let i=1;i<obj[key].length;i++) {
            if(sArr[obj[key][i-1]] !== sArr[obj[key][i]]) return false;
        }
        prev.push(key);
    }
    return true;
};

console.log(wordPattern("abba", "dog dog dog dog"))
