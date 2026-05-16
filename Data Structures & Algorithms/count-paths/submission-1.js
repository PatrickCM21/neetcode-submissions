class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let directions = [[1, 0], [0, 1]]
        let memo = {}

        let dfs = (i, j) => {
            //console.log("checking", i, j)
            if (memo[`${i},${j}`]) return memo[`${i},${j}`]
            if (i === m - 1 && j === n - 1) return 1
            let count = 0;

            for (let [rowC, colC] of directions) {
                let row = i + rowC
                let col = j + colC

                if (row >= m || col >= n) continue;

                count += dfs(row, col)
            }
            memo[`${i},${j}`] = count

            return count;
        }
        return dfs(0, 0)
    }
}
