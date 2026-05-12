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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        let dfs = (node1, node2) => {
            if (node1 === null && node2 === null) return true;
            if (node1 === null || node2 === null) return false;
            if (node1.val !== node2.val) return false;

            return dfs(node1.left, node2.left) && dfs(node1.right, node2.right)
        }
        return dfs(p, q)
    }
}
