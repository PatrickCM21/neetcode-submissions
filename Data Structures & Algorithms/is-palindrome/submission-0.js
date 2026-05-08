class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/\W/g, '').split('')

        let p1 = 0, p2 = s.length - 1;
        while (p1 <= p2) {
            if (s[p1] !== s[p2]) return false;
            p1++;
            p2--;
        }
        return true
    }
}
