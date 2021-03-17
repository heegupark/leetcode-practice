// 349. Intersection of Two Arrays

// Given two arrays, write a function to compute their intersection.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:
// Each element in the result must be unique.
// The result can be in any order.

// Using Set
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setA = new Set(nums1);
    const setB = new Set(nums2);
    const result = [];
    for(let element of setA) {
        if(setB.has(element)) result.push(element)
    }
    return result;
};

// Using object
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = [];
    let map = {};
    for(let num of nums1) {
        if(!map[num] && nums2.indexOf(num) !== -1) {
            result.push(num);
            map[num] = 1;
        }
    }
    return result;
};

// Using Set and filer
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const setA = new Set(nums1);
    const setB = new Set(nums2);
    return [...setA].filter(element => setB.has(element));
};
