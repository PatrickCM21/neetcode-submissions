class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let map = {}
        for (let letter of s1) {
            map[letter] = (map[letter] | 0) + 1
        }
        let p1 = 0, p2 = 0;

        let newMap = {};
        Object.assign(newMap, map)
        let count = s1.length;
        while (p2 !== s2.length) {
            if (newMap[s2[p2]]) {
                newMap[s2[p2]]--;
                count--;
                p2++
            } else {
                Object.assign(newMap, map)
                count = s1.length;
                p1++;
                p2 = p1;
            }
            if (!count) return true;

        }
        return false;
    }
}
