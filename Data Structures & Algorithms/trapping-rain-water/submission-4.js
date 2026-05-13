class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = height.length - 1;
        let maxLeft = 0, maxRight = 0;
        let waterTotal = 0;

        while (left <= right) {
            if (maxLeft < maxRight) {
                //console.log("updating", left)
                waterTotal += Math.max(maxLeft - height[left], 0)
                maxLeft = Math.max(height[left], maxLeft)
                left++;
            } else {
                //console.log("updating", right)

                waterTotal += Math.max(maxRight - height[right], 0)
                maxRight = Math.max(height[right], maxRight)
                right--;
            }
        }
        return waterTotal
    }
}
