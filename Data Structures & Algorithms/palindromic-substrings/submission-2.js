class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0;

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

        let helper = (i) => {
            let subStr = s[i]
            let offset = 1
            while (palindromeCheck(subStr)) {
                //console.log(subStr, "is a palindrome")
                total++
                if (i - offset >= 0 && i + offset < s.length) {
                    subStr = subStr.split('')
                    subStr.unshift(s[i - offset])
                    subStr.push(s[i + offset])
                    subStr = subStr.join('')
                    offset++;
                } else {
                    break;
                }
            }
            if (i + 1 === s.length) return;
            // right check
            offset = 1;
            subStr = s[i].concat(s[i + 1])
            while (palindromeCheck(subStr)) {
                //console.log(subStr, "is a palindrome")
                total++
                if (i - offset >= 0 && i + 1 + offset < s.length) {
                    subStr = subStr.split('')
                    subStr.unshift(s[i - offset])
                    subStr.push(s[i + 1 + offset])
                    subStr = subStr.join('')
                    offset++;
                } else {
                    break;
                }
            }
            helper(i + 1)
        }
        helper(0)
        return total
    }
}
