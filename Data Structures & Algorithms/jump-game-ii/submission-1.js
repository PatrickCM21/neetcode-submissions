class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        if (nums.length === 0 || nums.length === 1) return 0;
        let jumps = 1;
        let left = 0, right = nums[0];

        while (right < nums.length - 1) {
            let max = right;
            for (let i = left; i <= right; i++) {
                max = Math.max(max, i + nums[i])
            }
            left = right + 1;
            right = max;
            jumps++
        }
        return jumps;
    }
}
