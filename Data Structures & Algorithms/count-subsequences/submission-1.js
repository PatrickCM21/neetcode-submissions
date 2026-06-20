class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        s = s.split('')
        t = t.split('')
        s.filter(el => t.findIndex(tEl => tEl === el) !== -1)

        while (s.length > 0 && s[0] !== t[0]) {
            s.splice(0, 1)
        }

        let dp = Array.from({length: t.length + 1}, () => new Array(s.length + 1).fill(0))
        // console.log(s)
        // console.log(t)
        // console.log(dp)

        // i is for rows which is t
        // j is for cols which is s
        // add extra row for counting
        for (let i = t.length; i >= 1; i--) {
            let carry = 0;
            for (let j = s.length; j >= 1; j--) {
                let row = i - 1
                let col = j - 1;
                //console.log('looking at', row, t[row], 'and', col, s[col])
                if (row === t.length - 1) {
                    if (t[row] === s[col]) dp[i - 1][j - 1] = 1
                } else {
                    // need to validate whole row to the left
                    if (dp[i][j]) carry += dp[i][j]
                    if (t[row] === s[col]) {
                        dp[i][j] = dp[i - 1][j - 1] = carry
                    }
                }
            }
        }
        //console.log(dp)
        return dp[0].reduce((total, el) => total + el, 0)
    }
}
