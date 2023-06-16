// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};

function plusI(n, i) {
    return n + i;
}

const arr = [1, 2, 3];
const newArr = map(arr, plusI);
console.log(newArr);

// Example 1:
//
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
//     const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.