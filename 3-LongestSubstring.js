// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
    let l = 0, obj = {}
    return s.split('').reduce((a, e, i) => {
        if (obj[e] >= l) l = obj[e] + 1
        obj[e] = i
        return Math.max(a, i + 1 - l)
    }, 0)
};