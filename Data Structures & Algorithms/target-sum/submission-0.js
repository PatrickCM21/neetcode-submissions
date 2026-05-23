class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        
        let helper = (total, index) => {
            if (index === nums.length) {
                if (total === target) return 1;
                return 0;
            }

            return helper(total + nums[index], index + 1) 
            + helper(total - nums[index], index + 1)
        }
        return helper(0, 0)
    }
}
