class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]]

        let backtrack = (array, index) => {
            if (index >= nums.length) return
            let newArr = [...array]

            newArr.push(nums[index])
            res.push([...newArr])

            backtrack(newArr, index + 1)
            newArr.pop()
            backtrack(newArr, index + 1)
        }
        backtrack([], 0)
        return res
    }
}
