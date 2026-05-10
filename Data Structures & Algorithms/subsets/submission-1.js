class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = []

        let backtrack = (array, index) => {
            let newArr = [...array]
            if (index === nums.length) return res.push([...newArr])

            newArr.push(nums[index])

            backtrack(newArr, index + 1)
            newArr.pop()
            backtrack(newArr, index + 1)
        }
        backtrack([], 0)
        return res
    }
}
