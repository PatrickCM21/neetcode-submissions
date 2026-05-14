class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums.length;
        let low = 0, high = n - 1;
        let res = Infinity

        while (low <= high) {
            let mid = Math.floor((high - low) / 2) + low;
            res = Math.min(res, nums[mid])
            //console.log(res, "at index", mid, "with low", low, "and high", high)
            if (nums[mid] < nums[high]) {
                // therefore this half is sorted
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return res
    }
}
