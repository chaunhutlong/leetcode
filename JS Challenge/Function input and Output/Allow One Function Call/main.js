// https://leetcode.com/problems/allow-one-function-call/description/?utm_campaign=PostD8&utm_medium=Post&utm_source=Post&gio_link_id=a9By01Oo
/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function(fn) {
    return function(...args){
        if(fn.called){
            return undefined;
        }
        fn.called = true;
        fn.calls = 1;
        fn.value = fn(...args);
        return fn.value;
    }
};

// Example 1:
//
// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
//     const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
// Example 2:
//
// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
//     const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called