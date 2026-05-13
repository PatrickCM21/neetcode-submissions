class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]        

        let bfs = (i, j) => {
            let queue = [[i, j]] 
            let steps = 0;
            let visited = Array.from({length: m}, () => new Array(n).fill(0))

            while (queue.length) {
                let currLen = queue.length
                //console.log(queue)
                for (let i = 0; i < currLen; i++) {
                    let [row, col] = queue.shift()
                    visited[row][col] = 1;

                    grid[row][col] = Math.min(grid[row][col], steps)

                    for (let [rowOff, colOff] of directions) {
                        let newRow = row + rowOff;
                        let newCol = col + colOff;
                        if (newRow < 0 || newRow >= m) continue;
                        if (newCol < 0 || newCol >= n) continue;
                        if (visited[newRow][newCol]) continue;

                        let newGrid = grid[newRow][newCol]
                        if (newGrid === 0 || newGrid === -1) continue;

                        queue.push([newRow, newCol])
                    }
                }
                steps++
                if (steps > 50) break;
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    bfs(i, j)
                }
            }
        }
    }
}
