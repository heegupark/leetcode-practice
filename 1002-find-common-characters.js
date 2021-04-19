// 1002. Find Common Characters

// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
// You may return the answer in any order.

// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const result = A[0].split('');
    for(let i=1;i<A.length;i++) {
        let index = result.length;
        while(index) {
          const char = result.pop();
          if(A[i].includes(char)) {
            result.unshift(char);
            A[i] = A[i].slice(0, A[i].indexOf(char)) + A[i].slice(A[i].indexOf(char)+1)
          }
          index--;
        }
    }

    return result;
};
