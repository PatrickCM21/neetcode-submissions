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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (subRoot === null) return true

        let subtreeCheck = (node1, node2) => {
            if (node1 === null && node2 === null) return true
            if (node1 === null || node2 === null) return false
            //console.log("Node1: ", node1.val, "Node2:", node2.val)
            if (node1.val !== node2.val) return false

            let left = subtreeCheck(node1.left, node2.left)
            let right = subtreeCheck(node1.right, node2.right)
            //console.log("Subtree valid:", left && right)
            return left && right
        }

        let dfs = (node, subtree) => {
            if (node === null) return false;
            //console.log(node)
            if (node.val === subtree.val) {
                if (subtreeCheck(node, subtree)) return true;
            }
            return dfs(node.left, subtree) || dfs(node.right, subtree)
        }

       
        return dfs(root, subRoot)
    }
}
