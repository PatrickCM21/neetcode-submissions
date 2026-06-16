class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (!edges.length) return true
        if (edges.length !== n - 1) return false;
        let edgeMap = {}
        for (let [fromEdge, toEdge] of edges) {
            edgeMap[fromEdge] = edgeMap[fromEdge] ? [...edgeMap[fromEdge], toEdge] : [toEdge]
            edgeMap[toEdge] = edgeMap[toEdge] ? [...edgeMap[toEdge], fromEdge] : [fromEdge]
        }

        let cycleCheck = (visited, node, prev) => {
            visited[node] = true;

            let edges = edgeMap[node]
            for (let connection of edges) {
                if (visited[connection] && connection !== prev) return true;
                if (connection === prev) continue;
                //console.log('checking connection', connection, 'from', node)

                if (cycleCheck(visited, connection, node)) return true;
            }
            visited[node] = false;
            return false;
        }

        for (let i = 0; i < n; i++) {
            if (!edgeMap[i]) return false;
            // check for cycle
            let cycleVisited = new Array(n).fill(false)
            //console.log('starting from', i)
            if (cycleCheck(cycleVisited, i, null)) return false;
        }
        return true
    }
}
