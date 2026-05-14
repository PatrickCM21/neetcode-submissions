class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s[0] === '0') return 0
        let dp = []
        dp[0] = 1;

        for (let i = 1; i < s.length; i++) {
            let possibility = s[i - 1].concat(s[i])
            //console.log(possibility)
            let num = parseInt(possibility)
            if (parseInt(s[i]) === 0) {
                if (!['1', '2'].includes(s[i - 1])) {
                    return 0;
                }
                dp[i] = dp[i - 2] || 1
            } else if (num <= 26 && num >= 10) {
                dp[i] = dp[i - 1] + (dp[i - 2] || 1)
            } else {
                // can only do them individually
                dp[i] = dp[i - 1] || 1
            }
            //console.log("dp:", dp[i])
        }

        return dp[dp.length - 1]
    }
}
