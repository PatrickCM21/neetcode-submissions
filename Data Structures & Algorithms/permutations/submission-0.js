class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = []
        let dfs = (list) => {
            if (!nums.length) {
                res.push([...list])
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                list.push(nums.pop())
                dfs(list)
                nums.unshift(list.pop())
            }
            
        }
        dfs([])
        return res
    }
}
