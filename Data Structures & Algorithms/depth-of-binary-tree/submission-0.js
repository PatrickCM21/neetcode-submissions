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
    maxDepth(root) {
        let maxDepth = 0;
        if (!root) return 0;
        let itemStack = [root]
        let depthStack = [0]
        while (itemStack.length) {
            let item = itemStack.pop();
            let depth = depthStack.pop();
            depth++;
            maxDepth = Math.max(maxDepth, depth);
            if (item.left) {
                itemStack.push(item.left)
                depthStack.push(depth)
            }
            if (item.right) {
                itemStack.push(item.right)
                depthStack.push(depth)
            }
        }
        return maxDepth
    }
}
