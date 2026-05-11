class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map()
        for (let num of nums) {
            if (freq.has(num)) {
                freq.set(num, freq.get(num) + 1)
            } else freq.set(num, 1)
        }
        //console.log(freq)

        let arr = Array.from(freq)
        arr.sort((a, b) => b[1] - a[1])
        //console.log(arr)
        return arr.slice(0, k).map(el => el[0])
    }
}
