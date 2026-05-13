class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0, right = 0;
        let waterMap = new Array(height.length).fill(0)


        while (left < height.length - 1) {
            if (!height[left]) {
                left++
                continue;
            }
            right = left + 1;
            // find biggest right
            let maxRightInd = right;
            let maxRight = height[right]
            for (let i = right; i < height.length; i++) {
                if (height[i] >= maxRight) {
                    maxRight = height[i]
                    maxRightInd = i;
                }
            }
            let waterHeight = Math.min(maxRight, height[left])
            for (let i = left + 1; i < maxRightInd; i++) {
                waterMap[i] = Math.max(waterMap[i], waterHeight - height[i])
            }
            left++
            // console.log("water map after", left - 1)
            // console.log(waterMap)
        }
        return waterMap.reduce((num, total) => num + total, 0)
    }
}
