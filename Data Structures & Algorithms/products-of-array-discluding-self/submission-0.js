class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftMap = new Array(nums.length)
        leftMap[0] = nums[0]
        let rightMap = new Array(nums.length)
        rightMap[nums.length - 1] = nums[nums.length - 1]

        for (let i = 1; i < nums.length; i++) {
            leftMap[i] = leftMap[i - 1] * nums[i]
        }
        for (let i = nums.length - 2; i >= 0; i--) {
            rightMap[i] = rightMap[i + 1] * nums[i]
        }

        let res = new Array(nums.length)
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                res[i] = (rightMap[i + 1])
            } else if (i === nums.length - 1) {
                res[i] = (leftMap[i - 1])
            } else {
                res[i] = (leftMap[i - 1]) * (rightMap[i + 1])
            }
            
        }
        return res
    }
}
