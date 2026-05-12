class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let sign = x < 0 ? -1 : 1;
        x = parseInt(x.toString().split('').filter(el => el !== '-').reverse().join(''))
        if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) return 0;
        return x * sign
    }
}
