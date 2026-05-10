class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.list = nums.length > 1 ? nums.sort((a, b) => a - b).slice(-k) : nums
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.list.length < this.k) {
            this.list.push(val);
            this.list.sort((a, b) => a - b)
        } else if (val >= this.list[0]) {
            this.list[0] = val;
            this.list.sort((a, b) => a - b)
        }
        return this.list[0]
    }
}
