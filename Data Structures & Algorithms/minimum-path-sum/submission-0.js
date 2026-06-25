class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let dp = grid;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i === 0 && j === 0) continue;

                let topPath = i !== 0 ? grid[i - 1][j] : Infinity;
                let bottomPath = j !== 0 ? grid[i][j - 1] : Infinity;

                dp[i][j] = Math.min(topPath, bottomPath) + grid[i][j]
            }
        }
        //console.log(dp)

        return dp[m - 1][n - 1]
    }
}
