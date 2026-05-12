class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (let str of strs) {
            let key = str.split('').sort().join('')
            map[key] = map[key] ? [...map[key], str] : [str]
        }
        //console.log(map)
        return Object.values(map)
    }
}
