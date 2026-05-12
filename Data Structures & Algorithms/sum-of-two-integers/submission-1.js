class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        let res = 0;
        let carry = 0;
        for (let i = 0; i < 32; i++) {
            let bit1 = (a >> i) & 1
            let bit2 = (b >> i) & 1

            // add 1 when just carry, jsut one bit or carry and both

            if ((carry && !(bit1 || bit2)) ||
                (!carry && (bit1 ^ bit2)) ||
                (carry && (bit1 && bit2))) {
                res |= (1 << i)
            }
            carry = ((bit1 && bit2) || (carry && (bit1 ^ bit2)))

        }
        return res;
    }
}
