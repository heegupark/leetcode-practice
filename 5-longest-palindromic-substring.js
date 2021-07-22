// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: s = "cbbd"
// Output: "bb"
// Example 3:
// Input: s = "a"
// Output: "a"
// Example 4:
// Input: s = "ac"
// Output: "a"
var longestPalindrome = function(s) {
    const isPalin = (s,i,j) => {
        while(i < j){
            if(s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }
    let result = '';
    for(let i = 0; i < s.length; i++){
        for(let j = i+1; j < s.length; j++){
            if(s[i] === s[j] && isPalin(s,i,j)){
                let temp = s.substring(i,j+1);
                if(temp.length > result.length) result = temp;
                if(temp.length === s.length) return temp;
            }
        }
    }
    if(!result && s) result = s[0];
    return result;
};
