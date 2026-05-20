class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let res = [matrix[0][0]]
        let m = matrix.length;
        let n = matrix[0].length;
        let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        let visited = new Set('0,0')
        
        let dfs = (row, col, prevDir) => {
            //console.log("considering", row, col)

            visited[`${row},${col}`] = 1;

            for (let i = prevDir; i < prevDir + 4; i++) {
                let [rowC, colC] = directions[i % 4]
                let newRow = row + rowC
                let newCol = col + colC

                if (Math.min(newRow, newCol) < 0 ||
                    newRow >= m || newCol >= n ||
                    visited[`${newRow},${newCol}`]) continue
                res.push(matrix[newRow][newCol])
                dfs(newRow, newCol, i)
            }
        }
        dfs(0, 0, 0)
        return res
    }
}
