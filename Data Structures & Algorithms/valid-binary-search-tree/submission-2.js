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
    isValidBST(root) {

        let helper = (node, min, max) => {
            if (node === null) return true
            //console.log("Node:", node.val, "Max:", max, "Min:", min)
            if (node.val <= min) return false;
            if (node.val >= max) return false;
            
            let path1 = helper(node.right, node.val, max)
            let path2 = helper(node.left, min, node.val)
            return path1 && path2
        }
        return helper(root, -Math.pow(2, 31), Math.pow(2, 31) - 1)
    }
}
