// 791. Custom Sort String

// order and str are strings composed of lowercase letters. In order, no letter occurs more than once.
// order was sorted in some custom order previously. We want to permute the characters of str so that they match the order that order was sorted. More specifically, if x occurs before y in order, then x should occur before y in the returned string.
// Return any permutation of str (as a string) that satisfies this property.
// Example:
// Input:
// order = "cba"
// str = "abcd"
// Output: "cbad"
// Explanation:
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function(order, str) {
    let map = {};
    const not = [], result = [], orderArr = order.split('');
    for(let i=0;i<str.length;i++) {
        if(order.includes(str[i])) map[str[i]] = map[str[i]] ? ++map[str[i]] : 1;
        else not.push(str[i])
    }
    orderArr.forEach(item => {
        for(let i=0;i<map[item];i++) {
            result.push(item)
        }
    })
    return result.join('') + not.join('')
};
