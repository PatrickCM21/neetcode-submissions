class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let res = 0;
        for (let i = 0; i < digits.length; i++) {
            res += digits[digits.length - 1 - i] * Math.pow(10, i)
        }
        res++;
        res = res.toString()
        res = res.split('')
        return res.map(el => parseInt(el))
    }
}
