class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let parent = Array.from({length: n}, (_, i) => i)
        let components = n;

        let pathFind = (i) => {
            if (parent[i] === i) return i;
            parent[i] = pathFind(parent[i])
            return parent[i]
        }

        for (let [fromNode, toNode] of edges) {
            let parentTo = pathFind(fromNode)
            let parentFrom = pathFind(toNode)
            if (parentFrom !== parentTo) {
                components--;
                parent[parentFrom] = parentTo;
            }
        }
        return components
    }
}
