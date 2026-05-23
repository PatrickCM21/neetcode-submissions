class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        let memo = {}

        let backtrack = (total, i) => {
            if (memo[`${total},${i}`]) return memo[`${total},${i}`]
            if (total === amount) return 1
            if (total > amount) return 0
            if (i === coins.length) return 0

            let res = backtrack(total + coins[i], i) 
            + backtrack(total, i + 1)
            memo[`${total},${i}`] = res;

            return res
        }
        return backtrack(0, 0)
    }
}
