class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        let dp = new Array(n + 1).fill(Infinity)
        dp[0] = 0;
        dp[1] = 1;
        for (let i = 2; i <= n; i++) {
            let root = Math.sqrt(i)
            let nearestSquare = Math.floor(Math.sqrt(i))
            if (root === nearestSquare) {
                //console.log(i, 'is a perf square')
                dp[i] = 1;
                continue;
            } else {
                for (let j = nearestSquare; j > 0; j--) {
                    let minused = j * j
                    //console.log('removing', minused, 'from', i)
                    dp[i] = Math.min(dp[i], dp[i - minused] + 1)
                }
            }
            
        }
        //console.log(dp)
        return dp[n]
    }
}
