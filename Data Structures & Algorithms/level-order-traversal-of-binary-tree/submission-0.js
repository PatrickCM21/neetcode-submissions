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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return []
        let queue = [root]
        let res = []
        let resIndex = 0;

        while (queue.length) {
            let levelLength = queue.length;
            res.push([])
            for (let i = 0; i < levelLength; i++) {
                let node = queue.shift()
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
                res[resIndex].push(node.val)
            }
            resIndex++;
        }
        return res
    }
}
