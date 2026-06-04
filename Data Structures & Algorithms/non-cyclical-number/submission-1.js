class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let prevRes = []
        let currVal = n
        
        while (true) {
            //console.log('num is', currVal)
            let len = currVal.toString().length;
            let next = 0;
            for (let i = 0; i < len; i++) {
                //console.log((Math.floor(currVal / Math.pow(10, i)) % 10))
                next += Math.pow((Math.floor(currVal / Math.pow(10, i)) % 10), 2)
            }
            if (next === 1) return true;
            if (prevRes.includes(next)) return false
            prevRes.push(next)
            currVal = next
        }
    }
}
