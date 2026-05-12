class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // checking rows
        for (let i = 0; i < 9; i++) {
            let check = new Array(10).fill(0)
            for (let j = 0; j < 9; j++) {
                let val = board[i][j] !== '.' ? parseInt(board[i][j]) : 0
                if (val && check[val]) {
                    return false
                } else if (val) {
                    check[val]++;
                }

            }
        }
        console.log("passed rows")
        
        // checking cols
        for (let i = 0; i < 9; i++) {
            let check = new Array(10).fill(0)
            for (let j = 0; j < 9; j++) {
                let val = board[j][i] !== '.' ? parseInt(board[j][i]) : 0
                if (val && check[val]) {
                    return false
                } else if (val) {
                    check[val]++;
                }

            }
        }
        console.log("passed cols")

        // checking boxes
        for (let k = 0; k < 9; k++) {
            let check = new Array(10).fill(0)
            let rowOffset = Math.floor(k / 3) * 3;
            let colOffset = (k % 3) * 3;

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = i + rowOffset;
                    let col = j + colOffset;
                    let val = board[row][col] !== '.' ? parseInt(board[row][col]) : 0
                    if (val && check[val]) {
                        return false
                    } else if (val) {
                        check[val]++;
                    }

                }
            }
        }
        return true
    }
}

[[".",".",".",".","5",".",".","1","."],
[".","4",".","3",".",".",".",".","."],
[".",".",".",".",".","3",".",".","1"],
["8",".",".",".",".",".",".","2","."],
[".",".","2",".","7",".",".",".","."],
[".","1","5",".",".",".",".",".","."],
[".",".",".",".",".","2",".",".","."],
[".","2",".","9",".",".",".",".","."],
[".",".","4",".",".",".",".",".","."]]