class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let stack = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') stack.push('(')
            if (s[i] === '*') stack.push('*')
            if (s[i] === ')') {
                let ind = stack.findLastIndex(el => el === '(')
                if (ind === -1) {
                    ind = stack.findLastIndex(el => el === '*')
                    if (ind === -1) return false;
                    stack.splice(ind, 1)
                } else {
                    stack.splice(ind, 1)
                }
            }
        }
        //console.log(stack)
        while (stack.length) {
            let ind = stack.findIndex(el => el === '(')
            if (ind === -1) return true;
            stack = stack.slice(ind)
            let wildInd = stack.findIndex(el => el === '*')
            if (wildInd === -1) return false;
            stack.splice(wildInd, 1)
            stack.splice(0, 1)
        }
        return true
    }
}
