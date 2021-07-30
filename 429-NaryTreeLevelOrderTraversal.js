// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

// Recursive
var levelOrder = function (root, level = 0, res = []) {
    if (!root) return []

    res[level] = res[level] ? res[level] : []
    res[level].push(root.val)

    for (c of root.children) {
        levelOrder(c, level + 1, res)
    }
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
            queue.push(...node.children)
        }
        res.push(level)
    }

    return res
};