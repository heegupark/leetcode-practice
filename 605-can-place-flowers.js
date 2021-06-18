// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true
    if(!flowerbed[0] && !flowerbed[1]) {
        flowerbed[0] = 1;
        n--;
    }
    for(let i=1;i<flowerbed.length-1;i++) {
        if(!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1]) {
            n--;
            flowerbed[i] = 1;
        }
        if(n === 0) return true;
    }
    if(!flowerbed[flowerbed.length-2] && !flowerbed[flowerbed.length-1]) {
        flowerbed[flowerbed.length-1] = 1;
        n--;
    }
    return n === 0;
};
