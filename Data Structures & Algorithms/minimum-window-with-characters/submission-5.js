class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tMap = {}
        for (let char of t) {
            tMap[char] = (tMap[char] || 0) + 1
        }
        let sMap = {}
        let sMapCount = 0;
        let left = 0, right = -1;
        let subStr = ''
        let maxSub = Infinity
        while (right !== s.length) {
            if (sMapCount < t.length) {
                right++
                let currChar = s[right]

                if (tMap[currChar] > 0) {
                //console.log("adding", currChar)

                    sMap[currChar] = (sMap[currChar] | 0) + 1
                    if (sMap[currChar] <= tMap[currChar]) {
                        sMapCount++
                    }
                }
            } else {
                let currChar = s[left]
                //console.log(currChar)
                if (tMap[currChar] > 0) {
                    //console.log("removing", currChar)

                    sMap[currChar]--;
                    if (sMap[currChar] < tMap[currChar]) {
                        sMapCount--;
                    }
                }
                left++
            }
            if (sMapCount === t.length && (right - left + 1) < maxSub) {
                maxSub = (right - left + 1)
                subStr = s.slice(left, right + 1)
                //console.log("found new substr", subStr)
            }
        }
        return subStr
    }
}
