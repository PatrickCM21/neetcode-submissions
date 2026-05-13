class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxJump = 0
        for (let i = 0; i < nums.length; i++) {
            //console.log(maxJump, "Max Jump at", i)
            if (maxJump < i) return false;
            if (maxJump >= nums.length - 1) return true;
            maxJump = Math.max(i + nums[i], maxJump)
        }
        return true
    }
}
