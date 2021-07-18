// 383. Ransom Note
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const arrR = ransomNote.split(''), arrM = magazine.split('');
    arrR.forEach(item => {
        const index = arrM.indexOf(item);
        if(index !== -1) arrM.splice(index, 1);
    });
    return magazine.length === ransomNote.length + arrM.length;
};
