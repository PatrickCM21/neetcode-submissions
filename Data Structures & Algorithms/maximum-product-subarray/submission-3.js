class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let dpLarge = [...nums]
        let dpSmall = [...nums]

        for (let i = 1; i < nums.length; i++) {
            dpLarge[i] = Math.max(dpSmall[i - 1] * nums[i], dpLarge[i - 1] * nums[i], nums[i])
            dpSmall[i] = Math.min(dpSmall[i - 1] * nums[i], dpLarge[i - 1] * nums[i], nums[i])
        }
        return Math.max(...dpLarge)
    }
}
