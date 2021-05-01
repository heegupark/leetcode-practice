// 1189. Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "leetcode"
// Output: 0
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj = {};
    const balloon = {
        a: 1,
        b: 1,
        l: 2,
        n: 1,
        o: 2
    }
    for(let c of text) obj[c] = obj[c] ? ++obj[c] : 1;
    let count = Infinity;
    for(let key in balloon) {
        if(!obj[key] || obj[key] / balloon[key] < 1) return 0;
        count = Math.min(Math.floor(obj[key] / balloon[key]), count);
    }
    return count;
};

console.log(maxNumberOfBalloons('balon'))
