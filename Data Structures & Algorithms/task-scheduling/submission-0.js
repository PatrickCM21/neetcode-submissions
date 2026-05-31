class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let map = new Array(26).fill(0)
        let minQ = new MinPriorityQueue()
        let cycles = 0;

        for (let task of tasks) {
            let id = task.charCodeAt() - 'A'.charCodeAt()
            minQ.enqueue(((1 + n) * map[id]))
            map[id]++
        }
        //console.log(map)
        //console.log(minQ)

        while (minQ.size()) {
            let newTask = minQ.dequeue()
            //console.log(newTask)
            //console.log('must wait', Math.max(newTask - cycles, 0), 'cycles')
            cycles += Math.max(newTask - cycles, 0) + 1
        }
        return cycles
    }
}
