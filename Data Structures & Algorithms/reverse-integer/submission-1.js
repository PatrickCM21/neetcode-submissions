class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const MAX = Math.pow(2, 31) - 1;
        const MIN = -Math.pow(2, 31);
        let res = 0;
        let sign = x < 0 ? -1 : 1;
        x *= sign;
        while (x !== 0) {
            res *= 10;
            let digit = x % 10
            res += digit;
            x = Math.floor(x / 10);

            console.log(digit)
            console.log(x)
            if (sign && res > MAX) return 0
            if (!sign && res < MIN) return 0
        }
        return res * sign;
    }
}
