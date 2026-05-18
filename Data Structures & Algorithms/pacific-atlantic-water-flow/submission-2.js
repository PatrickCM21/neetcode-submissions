class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let m = heights.length;
        let n = heights[0].length;
        let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
        let res = []
        
        let pac = Array.from({ length: m }, () => Array(n).fill(false));
        let atl = Array.from({ length: m }, () => Array(n).fill(false));

        let dfs = (row, col, reachable) => {
            reachable[row][col] = true;

            for (let [rowC, colC] of directions) {
                let newRow = row + rowC
                let newCol = col + colC
                
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && 
                    !reachable[newRow][newCol] && 
                    heights[newRow][newCol] >= heights[row][col]) {
                    dfs(newRow, newCol, reachable);
                }
            }
        }

        for (let i = 0; i < m; i++) {
            dfs(i, 0, pac);
            dfs(i, n - 1, atl);
        }
        for (let j = 0; j < n; j++) {
            dfs(0, j, pac);
            dfs(m - 1, j, atl);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (pac[i][j] && atl[i][j]) res.push([i, j])
            }
        }
        return res
    }
}