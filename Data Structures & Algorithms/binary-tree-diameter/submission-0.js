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
    diameterOfBinaryTree(root) {
        // get left max len and right max len and find the largest + 1
        let longest = 0
        if (!root) return 0
        let dfs = (node) => {
            if (node === null) return 0;

            let leftLen = dfs(node.left)
            let rightLen = dfs(node.right)

            longest = Math.max(longest, leftLen + rightLen)
            return 1 + Math.max(leftLen, rightLen)
        }
        dfs(root)
        return longest
    }
}
