

// Recursive

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