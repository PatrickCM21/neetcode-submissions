class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        let n = matrix.length;
        let m = matrix[0].length;
        let longest = 0;
        let memo = {}

        let helper = (visited, row, col) => {
            if (memo[`${row},${col}`]) return memo[`${row},${col}`] 
            visited[row][col] = true;
            
            let currVal = matrix[row][col]
            //console.log('increasing path with curr', currVal)

            let longestPath = 0;

            for (let [rowC, colC] of directions) {
                let newRow = row + rowC
                let newCol = col + colC
                if (Math.min(newRow, newCol) < 0 ||
                    newRow >= n || newCol >= m ||
                    visited[newRow][newCol] ||
                    matrix[newRow][newCol] <= currVal) continue;
                longestPath = Math.max(longestPath, helper(visited, newRow,
                newCol)) 
                //console.log('curr longest for', row, col, 'is', longestPath)
            }
            visited[row][col] = false;
            //console.log('Path broken with length', longestPath)
            memo[`${row},${col}`] = longestPath + 1
            return memo[`${row},${col}`] 
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                let visited = Array.from({length: n}, () => new Array(m).fill(false))
                //console.log('starting at', i, j, matrix[i][j])
                longest = Math.max(helper(visited, i, j), longest)
            }
        }
        return longest
    }
}
