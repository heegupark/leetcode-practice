// 1207. Unique Number of Occurrences

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    for(let num of arr) {
        if(map[num]) {
            map[num]++
        } else {
            map[num] = 1;
        }
    }
    let map2 = {};
    for(let key in map) {
        if(map2[map[key]]) return false
        else map2[map[key]] = true
    }
    return true;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences2 = function(arr) {
    let map = {};
    for(let num of arr) {
        map[num] = map[num] ? ++map[num] : 1;
    }
    const result = Object.values(map);
    return result.length === new Set(result).size;
};
