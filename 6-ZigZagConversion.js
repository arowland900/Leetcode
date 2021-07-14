// https://leetcode.com/problems/zigzag-conversion/

var convert = function (s, numRows) {
    if (numRows < 2 || s.length < numRows) return s
    let n = s.length
    let pattern = 2 * numRows - 2
    let answer = ''

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < n; j += pattern) {
            answer += s[i + j]
            if (i && i + 1 - numRows && j + pattern - i < n) {
                answer += s[j + pattern - i]
            }

        }
    }
    return answer
};