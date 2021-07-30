// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// Recursive
var preorder = function (root, res = []) {
    if (!root) return res
    res.push(root.val)
    for (c of root.children) preorder(c, res)
    return res
};

// Iterative
var preorder = function (root) {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();
        result.push(node.val);
        for (c of node.children.reverse()) stack.push(c)
    }

    return result;
};