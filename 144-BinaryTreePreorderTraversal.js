// https://leetcode.com/problems/binary-tree-preorder-traversal/

// Recursive
var preorderTraversal = function (root, arr = []) {

    if (!root) return arr
    arr.push(root.val)
    if (root.left) preorderTraversal(root.left, arr)
    if (root.right) preorderTraversal(root.right, arr)
    return arr
};