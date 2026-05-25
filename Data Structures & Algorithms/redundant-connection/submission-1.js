class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let cycleEdgeList = []

        let edgeMap = Array.from({length: edges.length + 1}, () => new Array())

        for (let [start, end] of edges) {
            edgeMap[start].push(end)
            edgeMap[end].push(start)
        }
        //console.log("edge map is", edgeMap)

        let findCycle = (visited, edge, prev) => {
            // return start/end of cycle
            if (visited[edge]) {
                //console.log("found cycle at", edge)
                return edge
            }

            visited[edge] = true

            for (let connectingEdge of edgeMap[edge]) {
                //console.log(edge, "has connecting edge", connectingEdge)
                if (connectingEdge === prev) continue;
                let cycleStart = findCycle(visited, connectingEdge, edge)
                if (cycleStart !== null) {
                        cycleEdgeList.push([edge, connectingEdge])
                    if (edge === cycleStart) {
                        return null
                    } else {
                        return cycleStart
                    }
                }
            }
            return null
        }
        let visited = new Array(edges.length + 1).fill(false)
        findCycle(visited, 1, 0)

        //console.log(cycleEdgeList)
        for (let i = edges.length - 1; i >= 0; i--) {
            for (let j = cycleEdgeList.length - 1; j >= 0; j--) {
                if (edges[i][0] === cycleEdgeList[j][0] &&
                    edges[i][1] === cycleEdgeList[j][1] || 
                    edges[i][1] === cycleEdgeList[j][0] &&
                    edges[i][0] === cycleEdgeList[j][1]) {
                        return edges[i]
                    }
            }
        }
        return null
    }
}
