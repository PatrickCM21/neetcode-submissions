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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let sum = 0;

        let node1 = l1;
        let node2 = l2;

        let carry = 0;

        let newList = {}
        let currNode = {}
        let lastNode = {}

        let first = true;

        while (node1 !== null || node2 !== null || carry > 0) {
            currNode = {}

            let val1 = node1 !== null ? node1.val : 0;
            let val2 = node2 !== null ? node2.val : 0;
            //console.log('val1', val1, 'val2', val2, 'carry', carry)

            sum = (val1 + val2 + carry)
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            
            if (first) {
                newList.val = sum
                newList.next = null
                lastNode = newList;
                first = false;
            } else {
                currNode.val = sum
                currNode.next = null;
                lastNode.next = currNode;
                lastNode = currNode
            }
            node1 = node1 !== null ? node1.next : null
            node2 = node2 !== null ? node2.next : null
        }
        return newList
    }
}
