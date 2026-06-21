class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        matrix.reverse()
        let n = matrix.length;

        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
    }
}
