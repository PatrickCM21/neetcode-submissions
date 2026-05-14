/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return false
        let currNode = head;
        let map = new Map()
        while (currNode !== null) {
            //console.log("visitng", currNode)
            if (map.get(currNode)) return true;
            map.set(currNode, 1)
            currNode = currNode.next
        }
        return false
    }
}
