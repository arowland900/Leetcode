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

// Iterative
var inorderTraversal = function (root) {
    let res = []
    let stack = []
    let current = root
    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current.val)
        current = current.right
    }
    return res
};