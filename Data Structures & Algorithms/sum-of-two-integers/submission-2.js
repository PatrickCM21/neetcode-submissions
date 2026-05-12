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

            // just 1 of them, or all three of them
            let currBit = bit1 ^ bit2 ^ carry;
            if (currBit) {
                res |= (1 << i)
            }
            // at least two
            carry = bit1 + bit2 + carry >=2 ? 1 : 0

        }
        return res;
    }
}
