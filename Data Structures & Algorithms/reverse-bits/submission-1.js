class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let reversed = 0;
        for (let i = 0; i < 32; i++) {
            reversed += (((n >> i) & 1) << (31 - i))
        }
        console.log(reversed.toString(2))
        return reversed >>> 0
    }
}
