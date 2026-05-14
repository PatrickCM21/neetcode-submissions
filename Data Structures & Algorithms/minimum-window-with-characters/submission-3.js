class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let windowLen = t.length;
        let map = {}
        for (let letter of t) {
            map[letter] = (map[letter] || 0) + 1
        }

        while (windowLen <= s.length) {
            let start = 0;
            while (start + windowLen <= s.length) {
                let subStr = s.slice(start, start + windowLen)
                //console.log("checking", subStr)
                let mapCopy = {}
                Object.assign(mapCopy, map)
                let remain = t.length;
                for (let letter of subStr) {
                    if (mapCopy[letter]) {
                        mapCopy[letter]--;
                        remain--;
                        if (remain === 0) return subStr
                    }
                }
                start++;
            }
            windowLen++
        }
        return ''
    }
}
