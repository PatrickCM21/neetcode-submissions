/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return node
        let nodeMap = {}

        let helper = (node) => {
            let newNode = {}

            newNode.val = node.val
            newNode.neighbors = []

            nodeMap[node.val] = newNode

            for (let neighbor of node.neighbors) {
                if (nodeMap[neighbor.val]) {
                    newNode.neighbors.push(nodeMap[neighbor.val])
                } else {
                    newNode.neighbors.push(helper(neighbor))
                }
            }
            return newNode
        }
        return helper(node)
    }
}
