class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let dp = []
        dp[0] = 0
        for (let i = 1; i <=n; i++) {
            dp[i] = i % 2 === 1 ? dp[i - 1] + 1 : dp[i / 2]
        }
        return dp
    }
}
