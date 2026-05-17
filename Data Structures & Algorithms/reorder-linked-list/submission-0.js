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
     * @return {void}
     */
    reorderList(head) {

        let helper = (front, back) => {
            if (back === null) return front

            front = helper(front, back.next)
            if (front === null) return null

            let temp = null

            if (front.next === back || front === back) {
                back.next = null
            } else {
                temp = front.next
                front.next = back
                back.next = temp
            }

            return temp
        }
        helper(head, head)
        return head
    }
}
