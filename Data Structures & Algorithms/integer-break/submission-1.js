class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    integerBreak(n) {
        if (n === 2) return 1
        if (n === 3) return 2
        let dp = Array.from({length: n + 1}, (_, i) => i)

        for (let i = 2; i <= n; i++) {
            for (let j = 1; j <= (i - 1); j++) {
                dp[i] = Math.max(dp[i], dp[i - j] * j)
            }
        }
        //console.log(dp)
        return dp[n]
    }
}
