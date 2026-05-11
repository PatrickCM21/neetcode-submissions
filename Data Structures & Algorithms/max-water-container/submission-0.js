class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1;
        let max = 0;

        while (left < right) {
            let currWater = (right - left) * Math.min(heights[left], heights[right])
            if (currWater > max) {
                max = currWater;
            }
            if (heights[left] <= heights[right]) {
                left++
            } else {
                right--;
            }
        }
        return max
    }
}
