class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxPq = new MaxPriorityQueue()

        for (let stone of stones) {
            maxPq.push(stone)
        }

        while (maxPq.size() > 1) {
            let rock1 = maxPq.pop()
            let rock2 = maxPq.pop()
            if (rock1 - rock2 > 0) {
                maxPq.push(rock1 - rock2)
            }
        }
        return maxPq.pop() || 0
    }
}
