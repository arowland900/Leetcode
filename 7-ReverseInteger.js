// https://leetcode.com/problems/reverse-integer/

// Solution #1
var reverse = function (x) {
    x = x.toString().split('')
    let r = []
    while (x.length) {
        let v = x.pop()
        v == '-' ? r.unshift(v) : r.push(v)
    }
    let a = Number(r.join(''))
    if (Math.abs(a) > Math.pow(2, 31)) a = 0
    return a
};

// Solution #2
var reverse = function (x) {
    let r = 0
    let max = Math.pow(2, 31)
    let min = max * -1
    while (x) {
        let p = x % 10
        x = parseInt(x / 10)
        if (
            r > max / 10
            || (r == max / 10 && p > 7)
            || r < min / 10
            || (r == min / 10 && p < -8)
        ) return 0
        r = r * 10 + p
    }
    return r
};
