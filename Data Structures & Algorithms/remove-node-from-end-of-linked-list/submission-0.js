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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let fromEnd = 0

        let helper = (currNode) => {
            if (currNode === null) {
                return null;
            }

            currNode.next = helper(currNode.next)
            fromEnd++;

            if (fromEnd === n) {
                return currNode.next
            }
            return currNode;
        }
        return helper(head)
    }
}
