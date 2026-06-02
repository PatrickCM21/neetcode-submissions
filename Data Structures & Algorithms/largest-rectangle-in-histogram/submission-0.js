class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let max = 0;

        for (let i = 0; i < heights.length; i++) {
            let minHeight = heights[i]
            for (let j = i; j < heights.length; j++) {
                minHeight = Math.min(minHeight, heights[j]);
                let largestPossible = minHeight * (j - i + 1)
                max = Math.max(largestPossible, max)
            }
        }
        return max
    }
}
