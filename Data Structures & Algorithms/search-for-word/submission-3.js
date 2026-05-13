class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let m = board.length;
        let n = board[0].length;
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]

        let dfs = (i, j, visited, index) => {
            //console.log(index, word.length)
            if (index === word.length) return true;

            for (let [rowDiff, colDiff] of directions) {
                let newRow = i + rowDiff;
                let newCol = j + colDiff;

                if (Math.min(newRow, newCol) < 0 ||
                    newRow >= m ||
                    newCol >= n ||
                    visited.has(`${newRow},${newCol}`)) continue;

                if (board[newRow][newCol] === word[index]) {
                    //console.log("found letter", word[index])
                    //console.log("t index", newRow, newCol)
                    visited.add(`${newRow},${newCol}`)
                    if (dfs(newRow, newCol, visited, index + 1)) return true;
                    visited.delete(`${newRow},${newCol}`)
                }
            }
    
            return false;
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === word[0]) {
                    let visited = new Set()
                    visited.add(`${i},${j}`)
                    //console.log("checking index", i, j)
                    if (dfs(i, j, visited, 1)) return true;
                }
            }
        }
        return false;
    }
}

[["A","B","C","E"],
["S","F","E","S"],
["A","D","E","E"]]
