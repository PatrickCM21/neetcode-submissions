class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let cache = Array.from({ length: nums.length + 1 }, () => new Map());

        let helper = (prevIndex, index) => {
            if (index === nums.length) {
                return 0;
            }
            if (cache[prevIndex + 1].has(index)) {
                return cache[prevIndex + 1].get(index);
            }

            let seqLen = 0
            let prevValue = prevIndex === -1 ? -Infinity : nums[prevIndex];

            // include in list
            if (nums[index] > prevValue) {
                seqLen = helper(index, index + 1) + 1
            } 
            //dont include in list
            seqLen = Math.max(seqLen, helper(prevIndex, index + 1))
            
            cache[prevIndex + 1].set(index, seqLen);
            return seqLen
        }
        let longest = helper(-1, 0)
        return longest
    }
}