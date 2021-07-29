// https://leetcode.com/problems/n-ary-tree-postorder-traversal/submissions/

// Recursive 1
var postorder = function (root, stack = [root], res = []) {
    if (!root || stack.length == 0) return res
    if (stack.length) {
        let node = stack.pop()
        res.unshift(node.val)
        for (c of node.children) stack.push(c)
        return postorder(node, stack, res)
    } else return res
};

// Recursive 2
var postorder = function (root) {
    const res = [];
    traverse(root);
    return res;

    function traverse(node) {
        if (!node) return;
        for (child of node.children) {
            traverse(child);
        }
        res.push(node.val);
    }
};

// Iterative
var postorder = function (root) {
    let stack = [root]
    let res = []

    while (stack.length) {
        let cur = stack.pop()
        if (cur) {
            res.unshift(cur.val)
            for (let i = 0; i < cur.children.length; i++) {
                stack.push(cur.children[i])
            }
        }
    }

    return res
};