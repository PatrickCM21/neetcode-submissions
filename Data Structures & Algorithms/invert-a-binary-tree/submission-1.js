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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root
        let queue = [root];
        while (queue.length) {
            let item = queue.shift();
            [item.left, item.right] = [item.right, item.left];
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
        return root;
    }
}
