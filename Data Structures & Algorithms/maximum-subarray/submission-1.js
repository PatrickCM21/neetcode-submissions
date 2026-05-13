class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
       let dp = [...nums]
       for (let i = 1; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1] + dp[i], dp[i])
        }
        return Math.max(...dp)
    }
}
