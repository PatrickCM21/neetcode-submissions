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
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return head
        let helper = (prev, node) => {
            let temp = node.next;
            node.next = prev;
            if (temp === null) return node;
            return helper(node, temp)
        }
        return helper(null, head)
    }
}
