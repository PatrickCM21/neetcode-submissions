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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let newListHead = null
        let lowest = Infinity;
        let nodeIndex = -1;
        let firstPass = true;
        let curr = null

        while (curr !== null || firstPass) {
            let nextNode = null
            nodeIndex = -1;
            lowest = Infinity;
            for (let i = 0; i < lists.length; i++) {
                if (lists[i] && lists[i].val < lowest) {
                    nextNode = lists[i]
                    lowest = lists[i].val
                    nodeIndex = i;
                }
            }
            if (nodeIndex === -1) return newListHead;

            if (firstPass) {
                curr = nextNode;
                newListHead = curr;
                firstPass = false;
            } else {
                curr.next = nextNode;
                curr = nextNode;
            }
            
            lists[nodeIndex] = lists[nodeIndex].next

        }

        return newListHead;
    }
}
