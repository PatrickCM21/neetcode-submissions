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
    maxPathSum(root) {
        let maxSum = -Infinity

        let dfs = (node) => {
            if (node === null) return 0;

            let leftMax = dfs(node.left)
            let rightMax = dfs(node.right)

            let leftInclude = leftMax + node.val
            let rightInclude = rightMax + node.val
            let bothInclude = leftMax + rightMax + node.val

            maxSum = Math.max(maxSum, leftInclude, rightInclude, bothInclude, node.val)
            return Math.max(leftInclude, rightInclude, node.val)
        }
        dfs(root)
        return maxSum
    }
}
