class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        word1 = word1.split('')
        word2 = word2.split('')
        let memo = {}

        let helper = (index) => {
            if (memo[`${word1}${index}`]) return memo[`${word1}${index}`]
            if (index === word1.length && index === word2.length) {
                return 0;
            }
            if (index === word2.length && index < word1.length) {
                let oldWordChar = word1[index] 
                word1.splice(index, 1)
                let res = helper(index) + 1
                word1.splice(index, 0, oldWordChar)
                return res
            }
            if (index === word1.length && index < word2.length) {
                word1.splice(index, 0, word2[index])
                let res = helper(index) + 1
                word1.splice(index, 1)
                return res
            }

            if (word1[index] === word2[index]) {
                return helper(index + 1)
            }
            
            let oldWordChar = word1[index] 
            word1[index] = word2[index]
            let res1 = helper(index + 1) + 1
            word1.splice(index, 1)
            let res2 = helper(index) + 1
            word1.splice(index, 0, word2[index], oldWordChar)
            let res3 = helper(index + 1) + 1
            word1.splice(index, 1)
            memo[`${word1}${index}`] = Math.min(res1, res2, res3)
            return memo[`${word1}${index}`]
        }
        return helper(0)

    }
}
