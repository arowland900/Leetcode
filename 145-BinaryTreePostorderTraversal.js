// https://leetcode.com/problems/binary-tree-postorder-traversal/

// Recursive
var postorderTraversal = function (root, arr = []) {
    if (!root) return arr

    if (root.left) postorderTraversal(root.left, arr)
    if (root.right) postorderTraversal(root.right, arr)

    arr.push(root.val)

    return arr
};

// Iterative
var postorderTraversal = function (root) {
    let res = []
    let stack = [root]
    while (stack.length) {
        let curr = stack.pop()
        if (curr) {
            res.unshift(curr.val)
            stack.push(curr.left)
            stack.push(curr.right)
        }
    }
    return res
};