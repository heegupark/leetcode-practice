// 1078. Occurrences After Bigram

// Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.
// For each such occurrence, add "third" to the answer, and return the answer.

// Example 1:
// Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
// Output: ["girl","student"]

// Example 2:
// Input: text = "we will we will rock you", first = "we", second = "will"
// Output: ["we","rock"]
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const arr = text.split(' ');
    const result = [];
    let i = 0;
    while(i<arr.length-2) {
        if(arr[i] === first && arr[i+1] === second) {
            result.push(arr[i+2]);
            i += 2;
        } else {
            i++;
        }
    }
    return result;
};
