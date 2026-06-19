class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let operators = ['*', '/', '-', '+']

        while (tokens.length) {
            let next = tokens.shift()
            if (!operators.includes(next)) {
                stack.push(parseInt(next))
                continue;
            } 
            let item2 = stack.pop()
            let item1 = stack.pop()

            let operator = next

            let res;

            //console.log('doing', item1, operator, item2)

            if (operator === '+') {
                res = item1 + item2
            } else if (operator === '-') {
                res = item1 - item2;
            } else if (operator === '*') {
                res = item1 * item2
            } else {
                res = Math.trunc(item1 / item2)
            }
            stack.push(res)
        }
        return stack.pop()

    }
}
