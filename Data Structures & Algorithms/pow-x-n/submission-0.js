class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let res = 1;
        let mul = x;

        if (n > 0) {
            for (let i = 0; i < n; i++) {
                res *= mul
            }
        } else {
            for (let i = 0; i < Math.abs(n); i++) {
                res /= mul
            }
        }
        
        return res
    }
}
