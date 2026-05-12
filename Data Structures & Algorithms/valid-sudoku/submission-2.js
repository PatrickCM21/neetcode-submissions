class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = Array.from({length: 9}, () => new Set())
        let cols = Array.from({length: 9}, () => new Set())
        let box = Array.from({length: 3}, () => Array.from({length: 3}, () => new Set()))
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let num = board[i][j] !== '.' ? board[i][j] : null;
                if (!num) continue;

                if (rows[i].has(num)) return false;
                if (cols[j].has(num)) return false;
                if (box[Math.floor(i / 3)][Math.floor(j / 3)].has(num)) return false;

                rows[i].add(num)
                cols[j].add(num)
                box[Math.floor(i / 3)][Math.floor(j / 3)].add(num)
            }
        }
        return true
    }
}
