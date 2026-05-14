class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Array(s.length).fill(0)
        
        let helper = (index) => {
            if (dp[index]) return dp[index]
            if (index >= s.length) return 1;
            if (s[index] === '0') return 0

            let s2 = s.slice(index, index + 2)
            let subStrVal = parseInt(s2)
            //console.log("considering", subStrVal)

            let res = helper(index + 1)
            if (subStrVal <= 26 && subStrVal >= 10) {
                res += helper(index + 2)
            }

            dp[index] = res;
            return res;
        }
        return helper(0)
    }
}
