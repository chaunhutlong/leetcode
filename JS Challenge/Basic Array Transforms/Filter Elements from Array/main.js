// https://leetcode.com/problems/filter-elements-from-array/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// const filter = function (arr, fn) {
//     let result = [];
//     arr.forEach((element, index) => {
//         if (fn(element, index)) {
//             result.push(element);
//         }
//     });
//     return result;
// };

const filter = function (arr, fn) {
    let currentIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            arr[currentIndex++] = arr[i];
        }
    }

    return arr.slice(0, currentIndex);
}


// Example 1:
//
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
//     const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:
//
// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
//     fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:
//
// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
//     Falsey values such as 0 should be filtered out