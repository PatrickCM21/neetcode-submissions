class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let cache = new Array(nums.length).fill(-1)

        let helper = (prevIndex, index) => {
            if (index === nums.length) {
                return 0;
            }

            let seqLen = 0
            let prevValue = prevIndex === -1 ? -Infinity : nums[prevIndex];

            // include in list
            if (nums[index] > prevValue) {
                if (cache[index] !== -1) {
                    seqLen = cache[index];
                } else {
                    seqLen = helper(index, index + 1) + 1
                    cache[index] = seqLen
                }
            } 
            //dont include in list
            seqLen = Math.max(seqLen, helper(prevIndex, index + 1))
            
            return seqLen
        }
        let longest = helper(-1, 0)
        return longest
    }
}