class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let max = []

        let sortedStack = nums.slice(0, k)
        sortedStack.sort((a, b) => a - b)
        max.push(sortedStack[k - 1])
        //console.log("starting stack:", sortedStack)

        let removeLowest = (val, stack) => {
            let low = 0, high = stack.length;
            let mid;
            while (low <= high) {
                mid = Math.floor((high - low) / 2) + low
                if (stack[mid] === val) {
                    stack.splice(mid, 1)
                    //console.log('removing', val, 'at', mid)
                    return;
                } 
                if (val > stack[mid]) {
                    low = mid + 1
                } else {
                    high = mid - 1;
                }
            }
        }

        let addNew = (val, stack) => {
            let low = 0, high = stack.length;
            let mid;
            while (low <= high) {
                mid = Math.floor((high - low) / 2) + low
                if (val > stack[mid]) {
                    low = mid + 1
                } else {
                    high = mid - 1;
                }
            }
            stack.splice(low, 0, val)
            //console.log('adding', val, 'at', low)
        }
        for (let i = 1; i <= nums.length - k; i++) {
            removeLowest(nums[i - 1], sortedStack)
            addNew(nums[k + i - 1], sortedStack)
            //console.log("new stack:", sortedStack)
            max.push(sortedStack[k - 1])
        }
        return max
    }
}
