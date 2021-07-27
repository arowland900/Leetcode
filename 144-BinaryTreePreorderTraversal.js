// https://leetcode.com/problems/binary-tree-preorder-traversal/

// Recursive
var preorderTraversal = function (root, arr = []) {

    if (!root) return arr
    arr.push(root.val)
    if (root.left) preorderTraversal(root.left, arr)
    if (root.right) preorderTraversal(root.right, arr)
    return arr
};

// Iterative
var preorderTraversal = function (root, arr = []) {
    let stack = []
    let res = []
    let current = root
    while (current || stack.length) {

        if (current) res.push(current.val)

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)

        if (stack.length) current = stack.pop()
        else return res
    }
    return res
};