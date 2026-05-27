class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        if (n === 1) return 0;
        let nodesVisited = 1;

        let map = new Map()

        for (let [source, target, time] of times) {
            let sourceList = map.get(source)
            //console.log(sourceList)
            let res = sourceList ? [...sourceList, {target, time}] : [{target, time}]
            //console.log(res)
            map.set(source, res)
        }
        let visited = new Array(n + 1).fill(false)
        visited[k] = true;
        let queue = []
        let time = 0;
        // console.log(map)
        // console.log(k)
        if (!map.has(k)) return -1
        queue = [...map.get(k)]

        while (queue.length) {
            let len = queue.length;
            //console.log(queue)
            for (let i = 0; i < len; i++) {
                let nodePush = queue.shift()
                //console.log(nodePush)
                if (visited[nodePush.target]) continue;
                nodePush.time--;
                if (nodePush.time <= 0) {
                    //console.log('pushed to', nodePush.target)
                    let nextNodes = map.get(nodePush.target)
                    visited[nodePush.target] = true
                    if (nextNodes) queue.push(...nextNodes)
                    //console.log("increased node visited becuase of", nodePush.target)
                    nodesVisited++
                } else {
                    queue.push(nodePush)
                }
            }
            time++;
            //console.log(nodesVisited)
            if (nodesVisited === n) return time;
        }

        return -1;
    }
}
