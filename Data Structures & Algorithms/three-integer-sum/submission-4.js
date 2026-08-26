class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        //console.log(nums)
        let triplets = []

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let target = nums[i]
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let combined = nums[right] + nums[left] + target
                //console.log("target", target, 'with', nums[left], nums[right])

                if (combined === 0) {

                    triplets.push([nums[right], nums[left], target])
                }

                if (combined > 0) {
                    right--;
                    while (nums[right] === nums[right + 1]) right--;
                } else {
                    left++;
                    while (nums[left] === nums[left - 1]) left++;
                }
            }
        }
        
        return triplets
    }
}
