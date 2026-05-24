class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let memo = {}

        let dfs = (s1, s2, i) => {
            if (i === nums.length) {
                //console.log("comparing", s1, s2)
                if (s1 === s2) return true
                return false
            }
            if (memo[s1] || memo[s2]) return false

            let res = dfs(s1 + nums[i], s2, i + 1);
            if (res) return true;
            //console.log("adding", s1 + nums[i], "to memo")
            res = dfs(s1, s2 + nums[i], i + 1);
            if (res) return true
            //console.log("adding", s2 + nums[i], "to memo")
            memo[s1] = true;
            return false
        }
        return dfs(0, 0, 0)
    }
}
