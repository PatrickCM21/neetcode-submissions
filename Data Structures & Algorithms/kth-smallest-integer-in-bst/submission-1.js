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
        let arr = []
        let dfs = (node, arr, k) => {
            if (node === null) return;
            if (arr.length === k) return;

            dfs(node.left, arr, k)
            if (arr.length === k) return;
            arr.push([arr.length, node.val])
            //console.log(arr.length, k)
            dfs(node.right, arr, k)
        }
        dfs(root, arr, k)
        //console.log(arr)
        return arr[arr.length - 1][1]
    }
}
