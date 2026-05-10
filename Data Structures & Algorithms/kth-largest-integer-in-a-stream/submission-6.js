
class KthLargest {

    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        let minHeap = new MinPriorityQueue();

        // Adding an element
        for (let val of nums) {
            minHeap.enqueue(val);   
        }

        // Removing the smallest element
        while (minHeap.size() > k) {
            minHeap.dequeue();
        }

        this.minHeap = minHeap
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val)
        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }
        return this.minHeap.front();
    }
}
