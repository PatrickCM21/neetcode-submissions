// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let map = new Map()

        let helper = (oldNode) => {
            if (oldNode === null) return null;

            let newNode = {}
            map.set(oldNode, newNode)

            newNode.val = oldNode.val
            newNode.next = helper(oldNode.next)
            newNode.random = map.get(oldNode.random)
            return newNode
        }
        let newHead = helper(head)
        return newHead
    }
}
