class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        let memo = {}
        let helper = (total, index) => {
            if (memo[`${total},${index}`]) return memo[`${total},${index}`]
            if (index === nums.length) {
                if (total === target) return 1;
                return 0;
            }
            let res = helper(total + nums[index], index + 1) 
            + helper(total - nums[index], index + 1)
            memo[`${total},${index}`] = res;
            return res;
        }
        return helper(0, 0)
    }
}
