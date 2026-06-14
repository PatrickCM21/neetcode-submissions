class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {

        let helper = (sInd, pInd, wild) => {
            //console.log(sInd, pInd, wild)
            if (sInd === s.length) {
                if (pInd === p.length) return true;
                // else need to try wild
                wild = ''
            } else if (pInd === p.length && !wild) return false;

            if (wild) {
                if (wild === '.') {
                    if (helper(sInd + 1, pInd, '.')) return true
                } else if (s[sInd] === wild) {
                    if (helper(sInd + 1, pInd, wild)) return true
                }
            }

            if (pInd + 1 < p.length && p[pInd + 1] === '*') {
                // use wildcard
                if (helper(sInd, pInd + 2, p[pInd])) return true
                // skip wild
                return helper(sInd, pInd + 2, '')
            }

            if (s[sInd] === p[pInd] ||
                p[pInd] === '.') {
                    return helper(sInd + 1, pInd + 1, '')
                }
            return false;
        }
        return helper(0, 0, '')
    }
}
