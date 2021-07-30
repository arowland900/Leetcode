// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Recursive
var levelOrder = function (root, res = [], level = 0) {
    if (!root) return []

    res[level] = res[level] ? res[level] : []

    res[level].push(root.val)

    if (root.left) levelOrder(root.left, res, level + 1)
    if (root.right) levelOrder(root.right, res, level + 1)

    return res
};