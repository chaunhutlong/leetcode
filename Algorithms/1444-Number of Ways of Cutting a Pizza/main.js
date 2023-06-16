// https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/
/**
 * @param {string[]} pizza
 * @param startRow
 * @param endRow
 * @param startCol
 * @param endCol
 * @return {boolean}
 */
function isValid(pizza, startRow, endRow, startCol, endCol) {
    for (let i = startRow; i <= endRow; i++) {
        for (let j = startCol; j <= endCol; j++) {
            if (pizza[i][j] === 'A') {
                return true;
            }
        }
    }
    return false;
}

const MOD = 1000000007;
function solve(pizza, dp, startRow, startCol, cutsLeft) {
    const m = pizza.length;
    const n = pizza[0].length;

    if (cutsLeft === 0 ) return 1;

    if (dp[startRow][startCol][cutsLeft] !== -1) {
        return dp[startRow][startCol][cutsLeft];
    }

    let ans = 0;

    // cut horizontally
    for (let i = startRow; i < m - 1; i++) {
        const upperHalf = isValid(pizza, startRow, i, startCol, n - 1);
        const lowerHalf = isValid(pizza, i + 1, m - 1, startCol, n - 1);

        if (upperHalf && lowerHalf) {
            ans = (ans + solve(pizza, dp, i + 1, startCol, cutsLeft - 1)) % MOD;
        }
    }

    // cut vertically
    for (let j = startCol; j < n - 1; j++) {
        const leftHalf = isValid(pizza, startRow, m - 1, startCol, j);
        const rightHalf = isValid(pizza, startRow, m - 1, j + 1, n - 1);

        if (leftHalf && rightHalf) {
            ans = (ans + solve(pizza, dp, startRow, j + 1, cutsLeft - 1)) % MOD;
        }
    }

    return dp[startRow][startCol][cutsLeft] = ans;
}


const ways = function(pizza, k) {
    const m = pizza.length;
    const n = pizza[0].length;

    if (k === 1) {
        return isValid(pizza, 0, m - 1, 0, n - 1) ? 1 : 0;
    }

    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(-1)));
    return solve(pizza, dp, 0, 0, k - 1);
};

const pizza =
    ["..A.A.AAA...AAAAAA.AA..A..A.A......A.AAA.AAAAAA.AA","A.AA.A.....AA..AA.AA.A....AAA.A........AAAAA.A.AA.","A..AA.AAA..AAAAAAAA..AA...A..A...A..AAA...AAAA..AA","....A.A.AA.AA.AA...A.AA.AAA...A....AA.......A..AA.","AAA....AA.A.A.AAA...A..A....A..AAAA...A.A.A.AAAA..","....AA..A.AA..A.A...A.A..AAAA..AAAA.A.AA..AAA...AA","A..A.AA.AA.A.A.AA..A.A..A.A.AAA....AAAAA.A.AA..A.A",".AA.A...AAAAA.A..A....A...A.AAAA.AA..A.AA.AAAA.AA.","A.AA.AAAA.....AA..AAA..AAAAAAA...AA.A..A.AAAAA.A..","A.A...A.A...A..A...A.AAAA.A..A....A..AA.AAA.AA.AA.",".A.A.A....AAA..AAA...A.AA..AAAAAAA.....AA....A....","..AAAAAA..A..A...AA.A..A.AA......A.AA....A.A.AAAA.","...A.AA.AAA.AA....A..AAAA...A..AAA.AAAA.A.....AA.A","A.AAAAA..A...AAAAAAAA.AAA.....A.AAA.AA.A..A.A.A...","A.A.AA...A.A.AA...A.AA.AA....AA...AA.A..A.AA....AA","AA.A..A.AA..AAAAA...A..AAAAA.AA..AA.AA.A..AAAAA..A","...AA....AAAA.A...AA....AAAAA.A.AAAA.A.AA..AA..AAA","..AAAA..AA..A.AA.A.A.AA...A...AAAAAAA..A.AAA..AA.A","AA....AA....AA.A......AAA...A...A.AA.A.AA.A.A.AA.A","A.AAAA..AA..A..AAA.AAA.A....AAA.....A..A.AA.A.A...","..AA...AAAAA.A.A......AA...A..AAA.AA..A.A.A.AA..A.",".......AA..AA.AAA.A....A...A.AA..A.A..AAAAAAA.AA.A",".A.AAA.AA..A.A.A.A.A.AA...AAAA.A.A.AA..A...A.AAA..","A..AAAAA.A..A..A.A..AA..A...AAA.AA.A.A.AAA..A.AA..","A.AAA.A.AAAAA....AA..A.AAA.A..AA...AA..A.A.A.AA.AA",".A..AAAA.A.A.A.A.......AAAA.AA...AA..AAA..A...A.AA","A.A.A.A..A...AA..A.AAA..AAAAA.AA.A.A.A..AA.A.A....","A..A..A.A.AA.A....A...A......A.AA.AAA..A.AA...AA..",".....A..A...A.A...A..A.AA.A...AA..AAA...AA..A.AAA.","A...AA..A..AA.A.A.AAA..AA..AAA...AAA..AAA.AAAAA...","AA...AAA.AAA...AAAA..A...A..A...AA...A..AA.A...A..","A.AA..AAAA.AA.AAA.A.AA.A..AAAAA.A...A.A...A.AA....","A.......AA....AA..AAA.AAAAAAA.A.AA..A.A.AA....AA..",".A.A...AA..AA...AA.AAAA.....A..A..A.AA.A.AA...A.AA","..AA.AA.AA..A...AA.AA.AAAAAA.....A.AA..AA......A..","AAA..AA...A....A....AA.AA.AA.A.A.A..AA.AA..AAA.AAA","..AAA.AAA.A.AA.....AAA.A.AA.AAAAA..AA..AA.........",".AA..A......A.A.AAA.AAAA...A.AAAA...AAA.AAAA.....A","AAAAAAA.AA..A....AAAA.A..AA.A....AA.A...A.A....A..",".A.A.AA..A.AA.....A.A...A.A..A...AAA..A..AA..A.AAA","AAAA....A...A.AA..AAA..A.AAA..AA.........AA.AAA.A.","......AAAA..A.AAA.A..AAA...AAAAA...A.AA..A.A.AA.A.","AA......A.AAAAAAAA..A.AAA...A.A....A.AAA.AA.A.AAA.",".A.A....A.AAA..A..AA........A.AAAA.AAA.AA....A..AA",".AA.A...AA.AAA.A....A.A...A........A.AAA......A...","..AAA....A.A...A.AA..AAA.AAAAA....AAAAA..AA.AAAA..","..A.AAA.AA..A.AA.A...A.AA....AAA.A.....AAA...A...A",".AA.AA...A....A.AA.A..A..AAA.A.A.AA.......A.A...A.","...A...A.AA.A..AAAAA...AA..A.A..AAA.AA...AA...A.A.","..AAA..A.A..A..A..AA..AA...A..AA.AAAAA.A....A..A.A"]

const k = 8;

console.log(ways(pizza, k));

// Input: pizza = ["A..","AAA","..."], k = 3
// Output: 3
// Explanation: The figure above shows the three ways to cut the pizza. Note that pieces must contain at least one apple.
//     Example 2:
//
// Input: pizza = ["A..","AA.","..."], k = 3
// Output: 1
// Example 3:
//
// Input: pizza = ["A..","A..","..."], k = 1
// Output: 1