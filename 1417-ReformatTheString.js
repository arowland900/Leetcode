// https://leetcode.com/problems/reformat-the-string/

var reformat = function (s) {
    let nums = '1234567890'
    let c = '', n = ''
    let m = Math.floor((s.length + 1) / 2)

    for (let i = 0; i < s.length; i++) {
        nums.includes(s[i]) ? n += s[i] : c += s[i]
        if (c.length > m || n.length > m) return ''
    }

    let arr = c.length > n.length ? [c, n] : [n, c]
    let res = ''
    let i = 0, j = 0

    while (res.length < s.length) {
        res += arr[i][j]
        i ? (i--, j++) : i++
    }
    return res

};