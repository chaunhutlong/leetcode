// https://leetcode.com/problems/memoize-ii/
/**
 * @param {Function} fn
 */
function memoize(fn) {
    const RESULT = Symbol('result');
    const globalCache = new Map();
    return function(...args) {
        let currentCache = globalCache;
        for (const arg of args) {
            if (!currentCache.has(arg)) {
                currentCache.set(arg, new Map());
            }
            currentCache = currentCache.get(arg);
        }

        if (!currentCache.has(RESULT)) {
            currentCache.set(RESULT, fn(...args));
        }

        return currentCache.get(RESULT);
    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */