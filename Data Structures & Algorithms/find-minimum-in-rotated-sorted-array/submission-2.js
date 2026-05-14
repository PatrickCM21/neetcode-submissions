class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums.length;
        let low = 0, high = n;

        while (low <= high) {
            let mid = Math.floor((high - low) / 2) + low;
            if (nums[mid] > nums[(mid + 1) % n]) return nums[(mid + 1) % n]
            //console.log("Mid", mid, "behind", (mid - 1) % n)
            if (nums[mid] < nums[(mid - 1) % n]) return nums[mid % n]
            if (nums[mid] > nums[low]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return nums[low]
    }
}
