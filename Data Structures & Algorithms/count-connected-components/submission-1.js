class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // add component if its new, but minus one everytime they're alr
        //connected, but then it repear is multi connections
        let components = n;

        let connections = Array.from({length: n}, () => new Set())

        for (let [fromEdge, toEdge] of edges) {
            //console.log('from', fromEdge, 'to', toEdge)
            if (connections[fromEdge].has(toEdge)) {
                continue;
            } else {
                connections[toEdge].forEach((el) => {
                    connections[fromEdge].add(el)
                })
                connections[fromEdge].add(toEdge)

                connections[fromEdge].forEach((el) => {
                    connections[toEdge].add(el)
                })
                connections[toEdge].add(fromEdge)

                for (let connection of connections[toEdge]) {
                    connections[toEdge].forEach((el) => {
                        connections[connection].add(el)
                    })
                    connections[connection].add(toEdge)
                }
                for (let connection of connections[fromEdge]) {
                    connections[fromEdge].forEach((el) => {
                        connections[connection].add(el)
                    })
                    connections[connection].add(fromEdge)
                }
                components--;
                //console.log(connections)
            }
        }
        return components
    }
}
