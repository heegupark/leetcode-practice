// 500. Keyboard Row

// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
// In the American keyboard:
// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// Example 2:
// Input: words = ["omk"]
// Output: []

// Example 3:
// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let map = {};
    const result = [];
    for(let c of "qwertyuiop") map[c] = 1;
    for(let c of "asdfghjkl") map[c] = 2;
    for(let c of "zxcvbnm") map[c] = 3;
    for(let word of words) {
        let temp = true;
        for(let i=1;i<word.length;i++) {
            if(map[word[0].toLowerCase()] !== map[word[i].toLowerCase()]) temp = false
        }
        if(temp) result.push(word);
    }
    return result;
};
