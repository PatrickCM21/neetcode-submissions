class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let dp = []
        dp[0] = cost[0]
        dp[1] = cost[1]
        for (let i = 2; i <= cost.length; i++) {
            let currCost = cost[i] ? cost[i] : 0
            dp[i] = Math.min(currCost + dp[i - 1], currCost + dp[i - 2])
        }
        return dp[cost.length]
    }
}
