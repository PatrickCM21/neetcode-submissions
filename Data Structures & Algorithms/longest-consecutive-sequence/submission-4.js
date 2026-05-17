class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        let set = new Set()
        let max = 1;
        for (let num of nums) {
            set.add(num)
        }
        for (let num of set) {
            //console.log(num)
            if (!set.has(num - 1)) {
                let curr = 1
                while (set.has(++num)) {
                    curr++
                }
                max = Math.max(curr, max)
            }
        }
        return max
    }
}
