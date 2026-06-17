class MedianFinder {
    constructor() {
        this.small = new PriorityQueue((a, b) => b - a); // Max heap for smaller half
        this.large = new PriorityQueue((a, b) => a - b); // Min heap for larger half
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // check the two halves are balanced, if so then add to left side
        // if not then add to right
        // need to check the top or bottom value too to see if a swap must occur
        if (this.small.size() === 0) {
            this.small.enqueue(num);
            return;
        } 
        if (this.small.size() === this.large.size()) {
            // need to add to small
            if (num > this.large.front()) {
                this.small.enqueue(this.large.pop())
                this.large.enqueue(num)
            } else {
                this.small.enqueue(num)
            }

        } else {
            // need to add to large
            if (this.small.front() > num) {
                this.large.enqueue(this.small.pop())
                this.small.enqueue(num)
            } else {
                this.large.enqueue(num)
            }
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front()
        } else {
            return (this.small.front() + this.large.front()) / 2
        }
    }
}
