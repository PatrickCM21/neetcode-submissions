class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let memo = new Map()

        let backtrack = (currWord) => {
            let noSpaceWord = currWord.replaceAll(' ', '')
            if (memo.has(noSpaceWord)) return false;
            if (!noSpaceWord.length) return true;

            for (let word of wordDict) {
                if (currWord.includes(word)) {
                    let newWord = currWord.replace(word, ' ')
                    if (backtrack(newWord)) return true;
                }
            }
            memo.set(noSpaceWord, 1)
            return false;
        }
        return backtrack(s)
    }
}
