class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let board = Array.from({length: n}, () => new Array(n).fill('.'))
        let res = []

        let checkQueenValidity = (row, col) => {
            // vertical
            for (let i = 0; i < n; i++) {
                if (board[i][col] === 'Q') return false 
            }

            // horizontal
            for (let j = 0; j < n; j++) {
                if (board[row][j] === 'Q') return false 
            }
            
            let directions = [[-1, -1], [1, 1], [1, -1], [-1, 1]]
            // diagonals
            for (let [rowDiff, colDiff] of directions) {
                let newRow = row + rowDiff
                let newCol = col + colDiff
                while (Math.min(newRow, newCol) >= 0 &&
                       Math.max(newRow, newCol) < n) {
                    if (board[newRow][newCol] === 'Q') return false
                    newRow += rowDiff;
                    newCol += colDiff;
                }
            }
            //console.log("valid")
            return true
        }

        let helper = (i, j, count) => {
            //console.log('checkiong', i, j)
            if (j === n) return helper(i + 1, 0, count)
            if (i === n) {
                if (count !== n) return;

                let copy = board.map((arr) => {
                    //console.log(arr)
                    return arr.join('')
                })
                //console.log(copy)
                res.push(copy)
                return;
            }

            if (checkQueenValidity(i, j)) {
                board[i][j] = 'Q'
                helper(i, j + 1, count + 1)
                board[i][j] = '.'
            }

            helper(i, j + 1, count)
            
            return;
        }
        helper(0, 0, 0)
        return res
    }
}
