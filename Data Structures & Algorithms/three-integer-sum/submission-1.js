class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        console.log(nums)
        let res = []
        let p1, p2;
        let aMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            let a = nums[i]
            if (aMap.has(a)) continue;
            aMap.set(a, true)
            
            p1 = i + 1;
            p2 = nums.length - 1;

            while (p1 < p2) {
                let b = nums[p1], c = nums[p2];
                //console.log("checking", a, b, c)

                if (a + b + c === 0) {
                    res.push([a, b, c])
                    while (p2 > i && nums[p2] === c) {
                        p2--;
                    }
                } else if (a + b + c < 0) {
                    while (p1 < nums.length && nums[p1] === b) {
                        p1++;
                    }
                } else {
                    while (p2 > i && nums[p2] === c) {
                        p2--;
                    }
                }
            }
        }
        return res
    }
}
