class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        let memo = {}

        let helper = (n) => {
            if (memo[n]) return memo[n]
            if (n === 0) return 0;
            let min = Infinity
            let highestSquare = Math.floor(Math.sqrt(n))

            for (let i = highestSquare; i > 0; i--) {
                //console.log('minusing', i * i, 'from', n)
                min = Math.min(min, helper(n - i * i) + 1)
            }
            memo[n] = min
            return min;
        }
        return helper(n)
    }
}
