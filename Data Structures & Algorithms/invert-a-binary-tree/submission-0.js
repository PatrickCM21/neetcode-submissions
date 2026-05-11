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

        let inverter = (node) => {
            if (node === null) return;

            inverter(node.left)
            inverter(node.right)

            let temp = node.left;
            node.left = node.right
            node.right = temp;
        }
        inverter(root)
        return root;
    }
}
