class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let n = board.length;
        let m = board[0].length;
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        
        let visited = Array.from({length: n}, () => new Array(m).fill(false))


        let checkSurrounded = (i, j) => {
            let queue = [[i, j]]
            let updates = [[i, j]]

            while (queue.length) {
                let len = queue.length;

                for (let i = 0; i < len; i++) {
                    let [row, col] = queue.pop()
                    visited[row][col] = true;
                    if (Math.min(row, col) === 0 ||
                        row === n - 1 || col === m - 1) return;
                    for (let [rowC, colC] of directions) {
                        let newRow = row + rowC
                        let newCol = col + colC
                        if (board[newRow][newCol] === 'O' &&
                            !visited[newRow][newCol]) {
                            queue.unshift([newRow, newCol])
                            updates.push([newRow, newCol])
                        }
                    }
                }
            }
            for (let [updateRow, updateCol] of updates) {
                board[updateRow][updateCol] = 'X'
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === 'O' &&
                    !visited[i][j]) {
                        visited = Array.from({length: n}, () => new Array(m).fill(false))
                        //console.log('checking from', i ,j)
                        checkSurrounded(i, j)
                    }
            }
        }
        return board
    }
}



