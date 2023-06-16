// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let result = 0, current, previous = 0;

    for (const char of s) {
        current = symbol.get(char);
        result += current > previous ? current - 2 * previous : current;
        previous = current;
    }

    return result;
}

// Example 1:
//
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
//
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
//
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.