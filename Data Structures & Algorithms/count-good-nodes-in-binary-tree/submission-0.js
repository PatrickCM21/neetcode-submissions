/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {

        let helper = (node) => {
            if (node === null) return [];

            let list1 = helper(node.left)
            let list2 = helper(node.right)
            let list = [...list1, ...list2]

            list = list.filter(el => el >= node.val)
            list.push(node.val)
            //console.log(list)
            return list
        }
        let res = helper(root)
        //console.log(res)
        return res.length
    }
}
