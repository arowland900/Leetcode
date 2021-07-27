

// Recursive
var postorderTraversal = function (root, arr = []) {
    if (!root) return arr

    if (root.left) postorderTraversal(root.left, arr)
    if (root.right) postorderTraversal(root.right, arr)

    arr.push(root.val)

    return arr
};