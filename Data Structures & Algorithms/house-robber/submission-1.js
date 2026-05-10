class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length < 3) {
            if (nums.length <= 2) return Math.max(...nums)
            Math.max(...nums, nums[0] + nums[2])
        }
        let dp = new Array(nums.length).fill(0)
        dp[0] = nums[0]
        dp[1] = nums[1]
        dp[2] = Math.max(nums[2] + dp[0], dp[1])

        for (let i = 3; i < nums.length; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1], nums[i] + dp[i - 3])
        }
        return Math.max(...dp)
    }
}
