class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1, s2, s3) {
        if (s1.length + s2.length !== s3.length) return false;

        let helper = (i, j, k, s1Count, s2Count, dir) => {
            if (k === s3.length && Math.abs(s1Count - s2Count) <= 1) return true;
            if (s3[k] === s1[i]) {
                let movement = dir === 1 ? 0 : 1
                if (helper(i + 1, j, k + 1, s1Count + movement, s2Count, 1)) return true
            }
            if (s3[k] === s2[j]) {
                let movement = dir === 2 ? 0 : 1
                if (helper(i, j + 1, k + 1, s1Count, s2Count + movement, 2)) return true
            }
            return false;
        }
        return helper(0, 0, 0, 0, 0, 0)
    }
}
