// 166. Fraction to Recurring Decimal
// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
// If the fractional part is repeating, enclose the repeating part in parentheses.
// If multiple answers are possible, return any of them.
// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.
// Example 1:
// Input: numerator = 1, denominator = 2
// Output: "0.5"
// Example 2:
// Input: numerator = 2, denominator = 1
// Output: "2"
// Example 3:
// Input: numerator = 2, denominator = 3
// Output: "0.(6)"
// Example 4:
// Input: numerator = 4, denominator = 333
// Output: "0.(012)"
// Example 5:
// Input: numerator = 1, denominator = 5
// Output: "0.2"
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0';
    if(!denominator === 0) return `${Math.sign(numerator)}Infinity`;

    let res = '';
    if(Math.sign(numerator) !== Math.sign(denominator))  res += "-";

    let n = Math.abs(numerator), d = Math.abs(denominator);

    res += Math.floor(n/d);
    n = n % d;
    if(!n) return res;

    res += ".";
    let pos = {};
    while(n) {
        pos[n] = res.length;
        n *= 10;
        res += Math.floor(n/d).toString();
        n %= d;
        if(pos[n]) return `${res.slice(0, pos[n])}(${res.slice(pos[n])})`;
    }
    return res;
};
