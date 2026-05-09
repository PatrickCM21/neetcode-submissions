class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length
        let n = matrix[0].length
        let high = m * n - 1
        let low = 0;
        let mid;
        while (low <= high) {
            mid = Math.floor((high - low) / 2) + low;
            let row = Math.floor(mid / (n || 1))
            let col = mid - (row * n)
            if (matrix[row][col] === target) return true;
            if (target < matrix[row][col]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return false;
    }
}