// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
    let s = ''

    for (let i = 0; i < strs[0].length; i++) {
        let c = strs[0][i]
        if (strs.every(e => e[i] == c)) s += c
        else return s
    }
    return s
};