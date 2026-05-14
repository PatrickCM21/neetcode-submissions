class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {

        coins.sort((a, b) => a - b)
        //console.log(coins)

        let helper = (total, index, n) => {
            if (total === 0) {
                //console.log("found combination at", n)
                return n
            }
            if (index < 0 || total < 0) return Infinity
            let coinTotal = Infinity;
            //console.log("at n", n, "with total", total, "coin:", coins[index])

            for (let i = Math.floor(total / coins[index]); i >= 0; i--) {
                //console.log("considering", i, coins[index])
                let res = helper(total - i * coins[index], index - 1, n + i)
                coinTotal = Math.min(coinTotal, res)
            }
            return coinTotal;
        }
        let res = helper(amount, coins.length - 1, 0)
        return res === Infinity ? -1 : res
        
    }
}
