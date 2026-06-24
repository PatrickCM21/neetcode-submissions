class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = ''
        let index = 0;
        let currPrefix = ''

        while (true) {
            let first = true
            for (let i = 0; i < strs.length; i++) {
                if (strs[i].length <= index) return prefix;

                if (first) {
                    currPrefix = strs[i][index]
                    first = false;
                }
                //console.log('analysing', strs[i], 'prefix', currPrefix)
                if (strs[i][index] !== currPrefix) return prefix;
            }
            prefix += currPrefix
            index++
        }
    }
}
