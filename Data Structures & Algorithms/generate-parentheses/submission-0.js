class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []

        let backtrack = (str, opened, n) => {
            if (!opened && !n) {
                res.push(str)
                return;
            }

            if (n) {
                str += '('
                backtrack(str, opened + 1, n - 1)
                str = str.slice(0, str.length - 1)
            }

            if (opened) {
                str += ')'
                backtrack(str, opened - 1, n)
                str = str.slice(0, str.length - 1)
            }
            return;
        }
        backtrack('', 0, n)
        return res;
    }
}
