class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0]
        let version1 = nums.slice(1)
        let version2 = nums.slice(0, nums.length - 1)

        let robCalc = (arr) => {
            let dp = [...arr]

            for (let i = 1; i < arr.length; i++) {
                dp[i] = Math.max(dp[i] + (dp[i - 2] || 0), dp[i - 1])
            }
            return dp[dp.length - 1]
        }
        return Math.max(robCalc(version1), robCalc(version2))
    }
}
