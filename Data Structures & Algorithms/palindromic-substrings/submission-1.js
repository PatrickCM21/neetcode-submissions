class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0;

        let windowSize = 1;
        let memo = new Map()

        let palindromeCheck = (str) => {
            if (memo.has(str)) return memo.get(str)
            if (str === str.split('').reverse().join('')) {
                //console.log(str, 'is a plaindrome')
                memo.set(str, true)
                return true
            } else {
                memo.set(str, false) 
                return false
            }
        }

        while (windowSize <= s.length) {
            for (let i = 0; i + windowSize <= s.length; i++) {
                let subStr = s.slice(i, i + windowSize)
                //console.log('considering', subStr)
                if (palindromeCheck(subStr)) total++
            }
            windowSize++
        }
        return total;
    }
}
