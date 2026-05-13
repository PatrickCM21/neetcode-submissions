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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2;
        if (!list2) return list1;
        let newList;
        if (list1.val <= list2.val) {
            newList = list1
            list1 = list1.next
        } else {
            newList = list2
            list2 = list2.next
        }
        

        let currNew = newList;

        while (list1 !== null || list2 !== null) {
            if (list1 === null) {
                currNew.next = list2
                list2 = list2.next;
                //console.log("going through list2")
            } else if (list2 === null) {
                currNew.next = list1
                list1 = list1.next;
            } else if (list1.val <= list2.val) {
                currNew.next = list1
                list1 = list1.next;
            } else {
                currNew.next = list2
                list2 = list2.next;
            }
            if (currNew.next) {
                currNew = currNew.next
            }
            
        }
        return newList
    }
}
