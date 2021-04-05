// 884. Uncommon Words from Two Sentences

// We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Return a list of all uncommon words.
// You may return the list in any order.

// Example 1:
// Input: A = "this apple is sweet", B = "this apple is sour"
// Output: ["sweet","sour"]

// Example 2:
// Input: A = "apple apple", B = "banana"
// Output: ["banana"]
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let map = {};
    for(let wordA of A.split(' ')) {
        if(map[wordA]) map[wordA]++
        else map[wordA] = 1
    }
    for(let wordB of B.split(' ')) {
        if(map[wordB]) map[wordB]++
        else map[wordB] = 1
    }
    const result = [];
    for(let word in map) {
        if(map[word] === 1) result.push(word)
    }
    return result;
};

console.log(uncommonFromSentences("s z z z s", "s z ejt"))
