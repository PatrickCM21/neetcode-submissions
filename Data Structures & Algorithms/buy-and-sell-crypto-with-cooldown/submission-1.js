class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let memo = {}
        
        let helper = (day, bought) => {
            if (day >= prices.length) return 0;
            if (memo[`${day},${bought}`]) return memo[`${day},${bought}`]
            if (bought) {
                let path1 = helper(day + 2, false) + prices[day]
                let path2 = helper(day + 1, bought)
                memo[`${day},${bought}`] = Math.max(path1, path2)
                return memo[`${day},${bought}`]
            } else {
                let path1 = helper(day + 1, true) - prices[day]
                let path2 = helper(day + 1, bought)
                memo[`${day},${bought}`] = Math.max(path1, path2)
                return memo[`${day},${bought}`]
            }
        }
        return helper(0, false)
    }
}
