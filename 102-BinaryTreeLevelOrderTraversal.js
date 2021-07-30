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

// Iterative
var levelOrder = function (root) {
    if (!root) return []

    let res = []
    let queue = [root]

    while (queue.length) {
        let level = []
        let q = queue.length

        for (let i = 0; i < q; i++) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(level)
    }
    return res
};