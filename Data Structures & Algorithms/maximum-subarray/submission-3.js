class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let recursion = (sum, index) => {
            if (index === nums.length) return sum

            sum = Math.max(sum + nums[index], nums[index])

            return Math.max(sum, recursion(sum, index + 1))
        }
        return recursion(-Infinity, 0)
    }
}
