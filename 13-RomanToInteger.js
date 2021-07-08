// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
    let obj = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let num = 0

    while (s.length) {
        let a = s[0]
        s = s.substr(1)
        let b = s[0]
        if (obj[a] < obj[b]) {
            num += (obj[b] - obj[a])
            s = s.substr(1)
        }
        else num += obj[a]
    }
    return num
};