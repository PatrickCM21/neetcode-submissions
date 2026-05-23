class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let dp = Array.from({length: coins.length}, () => new Array(amount + 1).fill(0))
        for (let i = 0; i < coins.length; i++) {
            dp[i][amount] = 1;
        }

        for (let i = amount - 1; i >= 0; i--) {
            for (let j = coins.length - 1; j >= 0; j--) {
                
                dp[j][i] = (i + coins[j] <= amount ? dp[j][i + coins[j]] : 0) 
                + (j + 1 < coins.length ? dp[j + 1][i] : 0)
            }
        }
        return dp[0][0]
    }
}
