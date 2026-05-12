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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let lca = null

        let dfs = (node) => {
            if (node === null) return false;
            console.log("looking at node", node.val)

            let self = (node.val === p.val || node.val === q.val)
            console.log(self)
            let left = dfs(node.left)
            let right = dfs(node.right)

            if (lca === null) {
                if ((left && right) || 
                    ((left || right) && self)) {
                        console.log("found lca", node)
                        console.log(left)
                        console.log(right)
                        console.log(self)
                        lca = node;
                        return true;
                    }
            }
            return left || right || self

        }
        dfs(root);
        return lca
    }
}
