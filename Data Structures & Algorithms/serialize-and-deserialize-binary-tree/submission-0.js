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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let arr = []

        let serialise = (node) => {
            arr.push(node !== null ? node.val : 'N')
            
            if (node === null) return;

            serialise(node.left)
            serialise(node.right)
        }
        serialise(root)
        return arr.toString()
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        data.replace('[', '')
        data.replace(']', '')
        let arr = data.split(',')
        arr = arr.map(el => el === 'N' ? null : el)
        let index = 0;

        let deserialise = () => {
            let node = {}

            node.val = arr[index]
            index++;
            if (node.val === null) return null;

            node.left = deserialise()
            node.right = deserialise()
            return node;
        }
        return deserialise()
    }
}
