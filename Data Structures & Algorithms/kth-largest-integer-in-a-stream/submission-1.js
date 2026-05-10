class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.kIndex = k;
        this.list = nums.sort((a, b) => a - b)
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.list.push(val)
        this.list.sort((a, b) => a - b)
        return this.list[this.list.length - this.kIndex]
    }
}
