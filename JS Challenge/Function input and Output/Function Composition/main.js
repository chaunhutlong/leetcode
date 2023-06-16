// https://leetcode.com/problems/function-composition/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9
/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => {
            return fn(acc);
        }, x);
    }
};
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduceRight((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
//
// console.log(sum); // Output: 15 (5 + 4 + 3 + 2 + 1)

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */