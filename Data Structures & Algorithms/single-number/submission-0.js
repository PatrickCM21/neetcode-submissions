class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let total = 0;
        for (let i = 0; i < nums.length; i++) {
            total ^= nums[i]
        }
        return total
    }
}
