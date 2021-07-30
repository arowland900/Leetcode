// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

var levelOrder = function (root, level = 0, res = []) {
    if (!root) return []

    res[level] = res[level] ? res[level] : []
    res[level].push(root.val)

    for (c of root.children) {
        levelOrder(c, level + 1, res)
    }
    return res
};