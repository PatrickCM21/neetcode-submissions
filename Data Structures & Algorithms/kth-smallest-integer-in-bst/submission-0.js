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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let smallest = null;

        let dfs = (node, k) => {
            if (node === null) return 0;

            let leftLen = dfs(node.left, k)
            //console.log("left at", node.val, leftLen)
            if (leftLen + 1 === k && smallest === null) {
                smallest = node;
            }
            let rightLen = dfs(node.right, k - leftLen - 1)
            return leftLen + rightLen + 1
        }
        dfs(root, k)
        return smallest.val
    }
}
