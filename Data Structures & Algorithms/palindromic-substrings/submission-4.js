class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let total = 0;

        let memo = new Map()

        let helper = (i) => {
            let start = s[i]
            let end = s[i]
            let offset = 1
            while (start === end) {
                //console.log(subStr, "is a palindrome")
                total++
                if (i - offset >= 0 && i + offset < s.length) {
                    start = s[i - offset]
                    end = s[i + offset]
                    offset++;
                } else {
                    break;
                }
            }
            if (i + 1 === s.length) return;
            // right check
            offset = 1;
            start = s[i]
            end = s[i + 1]
            while (start === end) {
                //console.log(subStr, "is a palindrome")
                total++
                if (i - offset >= 0 && i + 1 + offset < s.length) {
                    start = s[i - offset]
                    end = s[i + 1 + offset]
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
