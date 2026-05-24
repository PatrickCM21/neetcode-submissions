class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        word1 = word1.split('')
        word2 = word2.split('')
        if (!word1.length && !word2.length) return 0
        if (!word1.length) return word2.length;
        if (!word2.length) return word1.length;
        
        let dp = Array.from({length: word1.length + 1}, () => new Array(word2.length + 1).fill(Infinity))

        dp[0][0] = 0;

        for (let i = 0; i <= word1.length; i++) {
            for (let j = 0; j <= word2.length; j++) {
                // diagonal check
                if (i + 1 <= word1.length && j + 1 <= word2.length) {
                    if (word1[i] === word2[j]) {
                        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j])
                    } else {
                        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], dp[i][j] + 1)
                    }
                }
                // insert check
                if (j + 1 <= word2.length) {
                    dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1)
                }
                // delete check
                if (i + 1 <= word1.length) {
                    dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1)
                }
                
            }
        }
        return dp[word1.length][word2.length]

    }
}
