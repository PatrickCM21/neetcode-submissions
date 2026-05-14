class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (!amount) return 0;
        let map = new Map() //memo

        let helper = (remainder) => {
            if (map.has(remainder)) return map.get(remainder)
            if (remainder === 0) return 0;
            if (remainder < 0) return Infinity;

            let res = Infinity

            for (let i = 0; i < coins.length; i++) {
                res = Math.min(helper(remainder - coins[i]), res)
            }
            //console.log("at", remainder, "best is", res, "+ 1")
            map.set(remainder, res + 1)
            return res + 1
        }
        helper(amount)
        //console.log(map)
        return map.get(amount) !== Infinity ? map.get(amount): -1
    }
}
