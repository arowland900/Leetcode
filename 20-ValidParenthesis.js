// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
    let chars = s.split('')
    let stack = []
    let open = '({['
    let inverses = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for (let i = 0; i < chars.length; i++) {
        if (open.includes(chars[i])) stack.push(chars[i])
        else if (stack.pop() != inverses[chars[i]]) return false
    }
    return !stack.length
};