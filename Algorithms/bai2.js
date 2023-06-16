// TECHNICAL TEST 1 (2/4)
// You are the owner of a coworking space like WeWork and your office building is rectangular.
// Your team just built wall partitions to create mini offices for startups.
// This office campus is represented by a 2D array of 1s (floor spaces) and 0s (walls).
// Each point on this array is a one foot by one foot square. You need to calculate the number of offices.
// A single office is bordered by walls and is constructed by placing floors next to each other, horizontally and/or vertical


// Here is an example of the raw input:
// 4
// 5
// 11110
// 11010
// 11000
// 00000
// 4 represents the number of rows.
// 5 represents the number of columns.

function DFS(grid, visited, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || visited[i][j] || grid[i][j] === "0") {
        return;
    }
    visited[i][j] = true;
    DFS(grid, visited, i + 1, j);
    DFS(grid, visited, i - 1, j);
    DFS(grid, visited, i, j + 1);
    DFS(grid, visited, i, j - 1);
}

function countOffices(grid) {
    let count = 0;
    let visited = [];
    for (let i = 0; i < grid.length; i++) {
        visited.push([]);
        for (let j = 0; j < grid[i].length; j++) {
            visited[i].push(false);
        }
    }
    for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < visited[i].length; j++) {
            if (!visited[i][j] && grid[i][j] === "1") {
                count++;
                DFS(grid, visited, i, j);
            }
        }
    }
    return count;
}

let grid = [
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "0", "0", "0", "0"],
    ["0", "0", "1", "0", "0"]
];

console.log(countOffices(grid)); // 3