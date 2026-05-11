class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let size = s1.length - 1;
        let p1 = 0;
        let p2 = size;

        while (p2 < s2.length) {
            let attempt = s2.slice(p1, p2 + 1);
            //console.log(attempt)
            if (attempt.split('').sort().join('') === s1.split('').sort().join('')) {
                return true
            }
            p1++;
            p2++;
        }
        return false;
    }
}
