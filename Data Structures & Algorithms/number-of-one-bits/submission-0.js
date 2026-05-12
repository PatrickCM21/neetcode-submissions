class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let num = 0;
        for (let i = 0; i < 32; i++) {
            if ((n >> i) & 1) num++
        }
        return num
    }
}
