class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let memo = {}
        
        let helper = (p1, p2) => {
            if (memo[`${p1},${p2}`]) return memo[`${p1},${p2}`]
            if (p1 >= text1.length || p2 >= text2.length) return 0
            if (text1[p1] === text2[p2]) {
                // there is a match here, not dfigure out the subproblem as if the 
                // foirst character didnt exist
                let res = helper(p1 + 1, p2 + 1) + 1
                memo[`${p1},${p2}`] = res;
                return res
            }
            let path1 = helper(p1 + 1, p2)
            let path2 = helper(p1, p2 + 1)
            memo[`${p1},${p2}`] = Math.max(path1, path2)
            return memo[`${p1},${p2}`]
        }
        return helper(0, 0)

    }
}
