// 914. X of a Kind in a Deck of Cards

// In a deck of cards, each card has an integer written on it.
// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
// Each group has exactly X cards.
// All the cards in each group have the same integer.

// Example 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// Example 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

// Example 3:
// Input: deck = [1]
// Output: false
// Explanation: No possible partition.

// Example 4:
// Input: deck = [1,1]
// Output: true
// Explanation: Possible partition [1,1].

// Example 5:
// Input: deck = [1,1,2,2,2,2]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2].
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if(deck.length <= 1) return false;
    let obj = {};
    deck.map(i => obj[i] = obj[i] ? ++obj[i] : 1);
    const arr = Object.values(obj);
    const gcd = (x, y) => (!x ? y : gcd(y % x, x));
    let prev = arr[0];
    for(let i=1;i<arr.length;i++) {
        prev = gcd(prev, arr[i]);
        if(prev < 2) return false;
    }
    return true;
};
