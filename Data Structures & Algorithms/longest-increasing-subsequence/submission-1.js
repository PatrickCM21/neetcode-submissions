class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let dp = []
        for (let i = 0; i < nums.length; i++) {
            // first index is prev location
            // second index is length of chain
            dp[i] = [i, 1]
        }

        for (let i = 1; i < nums.length; i++) {
            let currNum = nums[i]
            let longestChain = 0;
            let chainedNum = i;
            for (let j = i - 1; j >= 0; j--) {
                if (currNum > nums[j]) {
                    if (dp[j][1] > longestChain) {
                        longestChain = dp[j][1]
                        chainedNum = j
                    }
                }
            }
            dp[i][0] = chainedNum;
            dp[i][1] = longestChain + 1;
        }
        let lengthNums = dp.map(el => el[1])
        return Math.max(...lengthNums)
    }
}
