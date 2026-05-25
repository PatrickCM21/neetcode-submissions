class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let high = Math.max(...piles)
        let low = 1;
        let mid;
        let res = high;

        let getHours = (val) => {
            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / val)
            }
            return hours;
        }

        while (low <= high) {
            mid = Math.floor((high - low) / 2 + low)
            //console.log("considering k", mid)
            let hoursTaken = getHours(mid)
            //console.log("takes", hoursTaken)
            //console.log("-------------")

            if (hoursTaken > h) {
                low = mid + 1
            } else {
                res = Math.min(res, mid)
                high = mid - 1;
            }
        }
        return res
    }
}
