class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let n = grid.length;
        let m = grid[0].length;
        let visited = Array.from({length: n}, () => new Array(m).fill(false))
        let islandCount = 0;

        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]

        let dfs = (row, col) => {
            visited[row][col] = true;

            for (let [rowC, colC] of directions) {
                let newRow = row + rowC
                let newCol = col + colC

                if (Math.min(newRow, newCol) < 0 ||
                    newRow >= n || newCol >= m ||
                    visited[newRow][newCol] ||
                    grid[newRow][newCol] !== '1') continue;
                
                dfs(newRow, newCol)
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (!visited[i][j] &&
                    grid[i][j] === '1') {
                        islandCount++;
                        dfs(i, j)
                    }
            }
        }
        return islandCount
    }
}
