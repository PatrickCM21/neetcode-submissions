class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        let memo = {}

        let helper = (arr) => {
            if (arr.length === 0) return 0
            if (memo[`${arr.toString()}`]) return memo[`${arr.toString()}`]
            let max = 0;

            for (let i = 0; i < arr.length; i++) {
                let oldVal = arr[i]
                let coinsIncrease = (arr[i - 1] || 1) * arr[i] * (arr[i + 1] || 1)
                arr.splice(i, 1)
                max = Math.max(max, helper(arr) + coinsIncrease)
                arr.splice(i, 0, oldVal)
            }
            memo[`${arr.toString()}`] = max
            return memo[`${arr.toString()}`]
        }
        return helper(nums)
    }
}
