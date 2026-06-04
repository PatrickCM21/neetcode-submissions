class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0;
        let n = grid.length
        let m = grid[0].length
        let queue = []
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]

        // add rotten bananas to queue
        // go through adding their adjacents and removing them
        // once queue is empty check no fresh fruit exist
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 2) queue.push([i, j])
            }
        }

        while (queue.length) {
            let len = queue.length;
            let foundFresh = false;
            for (let i = 0; i < len; i++) {
                let [row, col] = queue.pop()
                for (let [rowC, colC] of directions) {
                    let newRow = row + rowC
                    let newCol = col + colC
                    if (Math.min(newRow, newCol) < 0 ||
                        newRow >= n || newCol >= m ||
                        grid[newRow][newCol] !== 1) continue;
                    foundFresh = true;
                    grid[newRow][newCol] = 2
                    queue.unshift([newRow, newCol])
                }
            }
            if (foundFresh) minutes++;
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 1) return -1;
            }
        }
        return minutes
    }
}
