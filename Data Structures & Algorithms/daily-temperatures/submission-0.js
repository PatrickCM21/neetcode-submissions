class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let res = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            let stackLen = stack.length;
            for (let j = 0; j < stackLen; j++) {
                let stackEl = stack.pop()
                if (temperatures[i] > temperatures[stackEl]) {
                    res[stackEl] = i - stackEl
                } else {
                    stack.unshift(stackEl)
                }
            }
            stack.push(i)
        }
        return res
    }
}
