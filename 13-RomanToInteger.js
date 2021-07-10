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

// for loop solution:
var romanToInt = function (s) {
    let obj = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }, num = 0

    for (let i = 0; i < s.length; i++) obj[s[i]] < obj[s[i + 1]] ? num -= obj[s[i]] : num += obj[s[i]]
    return num
};