class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length;
        let mid;
        let len = nums.length;
        if (nums.length === 1) return nums[0] === target ? 0 : -1

        let binarySearch = (low, high) => {
            //console.log('going from', low, high)
            while (low <= high) {
                let mid = Math.floor((high - low) / 2) + low
                if (nums[mid] === target) return mid;
                if (nums[mid] < target) {
                    low = mid + 1
                } else {
                    high = mid - 1;
                }
            }
            return -1;
        }
        while (low <= high) {
            //console.log("low", low, "high", high)
            mid = Math.floor((high - low) / 2) + low
            if (nums[mid] > nums[(mid + 1) % len]) {
                //console.log('found split at', mid, (mid + 1) % len)
                let pass1 = binarySearch((mid + 1) % len, nums.length)
                if (pass1 !== -1) return pass1
                return binarySearch(0, mid)
            }
            if (nums[low] < nums[mid]) {
                low = mid + 1;
            } else {
                high = mid - 1
            }
        }
        return -1;
    }
}
