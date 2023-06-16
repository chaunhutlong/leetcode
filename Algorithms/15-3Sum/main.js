// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return [];
    }

    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        const a = nums[i];

        if (a > 0) {
            break;
        }

        if (i > 0 && a === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]]);

                while (j < k && nums[j] === nums[j + 1]) {
                    j++;
                }

                while (j < k && nums[k] === nums[k - 1]) {
                    k--;
                }

                j++;
                k--;
            }
            else if (sum > 0) {
                k--;
            }
            else
                j++;
        }
    }

    return result;
};

// Example 1:
//
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
//     nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
//     Notice that the order of the output and the order of the triplets does not matter.
//     Example 2:
//
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
//
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.