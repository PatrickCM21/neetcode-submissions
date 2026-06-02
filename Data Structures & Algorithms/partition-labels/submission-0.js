class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let map = new Map()
        let res = []

        for (let letter of S) {
            map.set(letter, (map.get(letter) || 0) + 1)
        }
        //console.log(map)

        let left = 0, right = 0;
        let stack = [S[0]]

        while (right < S.length) {
            stack.push(S[right])
            map.set(S[right], map.get(S[right]) - 1);
            let stackLen = stack.length;
            for (let i = 0; i < stackLen; i++) {
                let substrVal = stack.pop()
                //console.log('val of', substrVal, 'is', map.get(substrVal))
                if (map.get(substrVal) !== 0) {
                    stack.unshift(substrVal)
                }
            }
            right++
            if (stack.length === 0) {
                res.push(right - left)
                left = right
            }
        }
        return res
    }
}
