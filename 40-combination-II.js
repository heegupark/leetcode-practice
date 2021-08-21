// 40. Combination Sum II

// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]

// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = [];
    let visited = new Array(candidates.length).fill(false);
    candidates.sort((a,b) => a-b);
    const sum = (arr) => arr.reduce((a,b) => a+b,0);
    const isInArray = (arr, sub) => {
        sub.sort((a, b) => a-b);
        return arr.some(subarr => subarr.every((element, index) => element === sub[index]));
    }
    const helper = (array) => {
        if(sum(array) > target) return;
        if(isInArray(results, array)) return;
        if(sum(array) === target) results.push(array);
        for(let i=0;i<candidates.length;i++) {
            if (visited[i] || (i > 0 && candidates[i] === candidates[i-1] && !visited[i-1])) continue;
            visited[i] = true;
            helper([...array, candidates[i]]);
            visited[i] = false;
        }
    };
    helper([]);
    return results;
};
