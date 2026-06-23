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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let preIndex = 0;

        let helper = (inorderRemaining) => {
            if (inorderRemaining.length === 0) return null;

            let curr = preorder[preIndex]
            preIndex++
            let currIndex = inorderRemaining.findIndex(el => el === curr)
            let left = inorderRemaining.slice(0, currIndex)
            let right = inorderRemaining.slice(currIndex + 1)

            let node = {val: curr}
            node.left = helper(left)
            node.right = helper(right)
            return node;
        }
        return helper(inorder)
    }
}
