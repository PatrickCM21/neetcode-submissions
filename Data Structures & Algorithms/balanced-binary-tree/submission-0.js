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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true;

        let dfs = (node) => {
            if (node === null) return 0;

            let left = dfs(node.left)
            let right = dfs(node.right)

            if (Math.abs(left - right) > 1) res = false;
            return (Math.max(left, right)) + 1
        }
        dfs(root)
        return res
    }
}
