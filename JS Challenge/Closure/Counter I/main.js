// https://leetcode.com/problems/counter/editorial/
/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
    return () => n++;
};

