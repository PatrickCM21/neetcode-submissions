class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinPriorityQueue()
        let pointsChosen = []
        let map = {}

        for (let [x, y] of points) {
            let dist = Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2)))
            //console.log(dist, 'for', x, y)
            map[dist] = map[dist] ? [...map[dist], [x, y]] : [[x, y]]
            minHeap.push(dist)
        }
        //console.log(map)
        for (let i = 0; i < k; i++) {
            let heap = minHeap.pop()
            //console.log(heap)
            let coords = map[heap].pop()
            //console.log(coords)
            pointsChosen.push(coords)
        }
        return pointsChosen
    }
}
