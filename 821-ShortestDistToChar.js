
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