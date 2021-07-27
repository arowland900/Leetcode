// https://leetcode.com/problems/binary-tree-inorder-traversal/

// Recursive
function helper(node, res) {
    if (node) {
        if (node.left) helper(node.left, res)
        res.push(node.val)
        if (node.right) helper(node.right, res)
    }
}
var inorderTraversal = function (root) {
    let x = []
    helper(root, x)
    return x
};