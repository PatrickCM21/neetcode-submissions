class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let p1 = 0;
        let max = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < prices[p1]) p1 = i;
            if (prices[i] - prices[p1] > max) {
                max = prices[i] - prices[p1];
            }
        }
        return max
    }
}
