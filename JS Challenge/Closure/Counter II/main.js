// https://leetcode.com/problems/counter-ii/?utm_campaign=PostD3&utm_medium=Post&utm_source=Post&gio_link_id=xRxVYOXo
/**
 * @param {int} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = init
    };
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

// const counter = createCounter(0);
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.reset()); // 0
// console.log(counter.decrement()); // -1
// console.log(counter.decrement()); // -2
// console.log(counter.decrement()); // -3
// console.log(counter.reset()); // 0