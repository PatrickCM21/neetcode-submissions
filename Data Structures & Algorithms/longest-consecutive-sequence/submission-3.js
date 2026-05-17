class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        nums.sort((a, b) => a - b)
        let max = 1;
        let curr = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1] + 1) {
                curr++
            } else if (nums[i] !== nums[i - 1]) {
                curr = 1
            }
            max = Math.max(max, curr)
        }
        return max
    }
}
