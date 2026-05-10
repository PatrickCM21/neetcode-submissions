class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []

        let backtrack = (array, index) => {
            if (index === nums.length) {
                res.push([...array])
                return
            }

            array.push(nums[index])

            backtrack(array, index + 1)
            array.pop()
            backtrack(array, index + 1)
        }
        backtrack([], 0)
        return res
    }
}
