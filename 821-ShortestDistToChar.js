// https://leetcode.com/problems/shortest-distance-to-a-character/

// first solution
var shortestToChar = function (s, c) {

    let allCs = []
    let answer = []
    let n = s.length

    for (let i = 0; i < n; i++) if (s[i] == c) allCs.push(i)

    for (let i = 0; i < n; i++) {
        if (s[i] == c) answer.push(0)
        else {
            let min = Infinity
            for (let num of allCs) {
                let temp = Math.abs(num - i)
                if (temp < min) min = temp
            }
            answer.push(min)
        }
    }
    return answer
};

// second solution (no nested loops)
var shortestToChar = function (s, c) {

    let allCs = []
    let answer = []
    let n = s.length

    let prev = -Infinity
    for (let i = 0; i < n; i++) {
        if (s[i] == c) prev = i
        answer[i] = (i - prev)
    }

    prev = Infinity
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] == c) prev = i
        answer[i] = Math.min(answer[i], prev - i)
    }

    return answer
};