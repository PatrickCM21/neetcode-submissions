class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return []
        let res = []
        let alphabet = []
        // from char code
        for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
            alphabet.push(String.fromCharCode(i))
        }

        let helper = (string, index) => {
            if (index === digits.length) {
                res.push(string)
                return;
            }

            let digit = parseInt(digits[index])
            let start = digit < 8 ? (digit - 2) * 3 : (digit - 2) * 3 + 1
           
            for (let i = start; i < start + 3; i++) {
                helper(string.concat(alphabet[i]), index + 1)
            }
            if (digit === 9 || digit === 7) {
                helper(string.concat(alphabet[start + 3]), index + 1)
            }

        }
        helper('', 0)
        return res
    }
}
