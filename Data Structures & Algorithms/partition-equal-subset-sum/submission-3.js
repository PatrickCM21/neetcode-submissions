class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let middle = 50 * nums.length
        let dp = Array.from({length: nums.length + 1}, () => new Array(middle * 2).fill(false))

        dp[0][middle] = true
        for (let i = 0; i < dp.length - 1; i++) {
            for (let j = 0; j < dp[0].length; j++) {
                if (dp[i][j]) {
                    dp[i + 1][j - nums[i]] = true
                    dp[i + 1][j + nums[i]] = true
                }
            }
        }
        return dp[nums.length][middle]
    }
}
