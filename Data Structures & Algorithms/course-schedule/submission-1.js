class Node {
    constructor(id) {
        this.id = id
        this.adjList = []
    }
}
class Solution {
    
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */

    
    canFinish(numCourses, prerequisites) {
        let map = new Map()
        for (let i = 0; i < prerequisites.length; i++) {
            let [classId, prereq] = prerequisites[i]
            if (!map.has(prereq)) {
                let newNode = new Node(prereq)
                if (!map.has(classId)) {
                    let newAdjNode = new Node(classId)
                    map.set(classId, newAdjNode)
                }
                newNode.adjList.push(map.get(classId))
                map.set(prereq, newNode)
            } else {
                if (!map.has(classId)) {
                    let newAdjNode = new Node(classId)
                    map.set(classId, newAdjNode)
                }
                map.get(prereq).adjList.push(map.get(classId))
            }
        }
        //console.log(map)


        let hasCycle = (node, visited) => {
            if (visited[node.id]) return true;
            //console.log(node.adjList)

            visited[node.id] = 1;

            for (let i = 0; i < node.adjList.length; i++) {
                if (hasCycle(node.adjList[i], visited)) {
                    //console.log("cycle with", node.adjList[i].id)
                    return true;
                }
                visited[node.adjList[i].id] = 0
            }
            return false
        }

        for (let [id, node] of map) {
            let visited = new Array(numCourses).fill(0)
            if (hasCycle(node, visited)) return false;
            
        }
        return true;
    }
}
