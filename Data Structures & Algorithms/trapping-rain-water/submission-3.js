class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let waterTotal = 0;

        for (let i = 0; i < height.length; i++) {
            let rightArr = height.slice(i + 1)
            let leftArr = height.slice(0, i)
            // console.log(leftArr)
            // console.log(rightArr)
            let rightMax = Math.max(...rightArr) || 0
            let leftMax = Math.max(...leftArr) || 0
            let toAdd = Math.min(rightMax, leftMax)
            //console.log(toAdd)
            if (height[i] < toAdd) {
                waterTotal += toAdd - height[i]
            }
            
        }
        return waterTotal
        
    }
}
