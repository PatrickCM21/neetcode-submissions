class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = new Array(s.length).fill(0)
        dp[0] = 1

        for (let i = 0; i < s.length; i++) {
            //console.log("checking letter", s[i])
            for (let word of wordDict) {
                if (s.slice(i, i + word.length).includes(word)) {
                    //console.log("found word match for", i, "with", word)
                    //console.log(s.slice(i, i + word.length))
                    if (dp[i]) {
                        dp[i + word.length] = 1;
                    }
                }
            }
        }
        //console.log(dp)
        return dp[s.length] ? true : false
    }
}
