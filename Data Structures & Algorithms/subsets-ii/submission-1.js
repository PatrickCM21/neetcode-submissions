class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)
        let res = new Map()

        let helper = (arr, index) => {
            if (index === nums.length) {
                res.set(arr.toString(), [...arr])
                return;
            }

            // include
            arr.push(nums[index])
            helper(arr, index + 1)
            arr.pop()

            while (index + 1 < nums.length && nums[index + 1] === nums[index]) {
                index++
            }

            // skip
            helper(arr, index + 1)
        }
        helper([], 0)
        return [...res.values()]
    }
}
