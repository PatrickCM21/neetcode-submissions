class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;

        let left = 0, right = 1;
        let longest = 1;
        let map = new Map()
        map.set(s[left], true)

        while (right < s.length) {
            if (map.has(s[right])) {
                while (s[left] !== s[right]) {
                    map.delete(s[left]);
                    left++;
                }
                map.delete(s[left]);
                left++;
            }
            map.set(s[right], true)
            //console.log("considering", s.slice(left, right + 1))
            if ((right - left + 1) > longest) longest = right - left + 1;
            right++;
        }
        return longest;
    }
}
