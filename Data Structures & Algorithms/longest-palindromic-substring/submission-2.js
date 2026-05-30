class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longestLeft = 0
        let longestRight = 0;

        let checkPalindrome = (left, right) => {
            if (left < 0 || right === s.length) return;

            if (s[left] === s[right]) {
                //console.log('potential new palindrome at', left, right)
                if (right - left > longestRight - longestLeft) {
                    longestLeft = left
                    longestRight = right
                }
                checkPalindrome(left - 1, right + 1)
            }
        }

        for (let i = 0; i < s.length; i++) {
            checkPalindrome(i - 1, i + 1)
            if (i + 1 < s.length && s[i] === s[i + 1]) {
                if (longestRight - longestLeft < 2) {
                    longestLeft = i;
                    longestRight = i + 1
                }
                checkPalindrome(i - 1, i + 2)
            }
        }
        //console.log(longestLeft, longestRight)
        return s.slice(longestLeft, longestRight + 1)
    }
}
