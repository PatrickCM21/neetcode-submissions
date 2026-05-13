class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxSize = 0;
        let m = grid.length
        let n = grid[0].length

        let visited = Array.from({length: m}, () => new Array(n).fill(0))

        let dfs = (i, j) => {
            let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
            let size = 1;
            visited[i][j] = 1;

            for (let [rowOff, colOff] of directions) {
                let row = i + rowOff
                let col = j + colOff
                if (row >= m || row < 0) continue;
                if (col >= n || col < 0) continue;

                if (grid[row][col] && !visited[row][col]) {
                    //console.log("off the origin is", row, col)
                    size += dfs(row, col)
                }
            }
            //console.log(size)
            return size;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] && !visited[i][j]) {
                    //console.log("considering", i, j)
                    maxSize = Math.max(dfs(i, j, 0), maxSize)
                }
            }
        }
        return maxSize
    }
}
