// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// Recursive
var preorder = function (root, res = []) {
    if (!root) return res
    res.push(root.val)
    for (c of root.children) preorder(c, res)
    return res
};