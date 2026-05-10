class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []

        let dfs = (arr, index) => {
            let val = arr.reduce((el, total) => total + el, 0)
            // console.log("considering:", arr)
            // console.log("val:", val)
            if (val === target) {
                res.push([...arr])
                return;
            }
            if (val > target) return;
            if (index >= nums.length) return;

            arr.push(nums[index])
            dfs(arr, index)
            arr.pop()
            dfs(arr, index + 1)
        }
        dfs([], 0)
        return res
    }
}
