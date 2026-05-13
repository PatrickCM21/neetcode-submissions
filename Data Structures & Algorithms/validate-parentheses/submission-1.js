class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let openers = ['(', '{', '[']
        let map = {'{' : '}',
                    '[': ']',
                    '(': ')'}
        let stack = []

        for (let bracket of s) {
            if (openers.includes(bracket)) {
                stack.push(bracket)
            } else {
                if (!stack) return false;
                let opener = stack.pop()
                if (map[opener] !== bracket) return false;
            }
        }
        return !stack.length
    }
}
