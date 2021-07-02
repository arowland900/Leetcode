// https://leetcode.com/problems/palindrome-number/

// Solution with string conversion
var isPalindrome = function (x) {
    if (x < 0) return false
    x = x.toString().split('')
    while (true) {
        if (x.length > 1) {
            let a = x.shift(), b = x.pop()
            if (a != b) return false
        } else return true
    }
};

// Solution without string conversion
var isPalindrome = function (x) {
    if (x < 0 || (!(x % 10) && x)) return false
    let y = 0
    while (x > y) {
        y = y * 10 + x % 10
        x = parseInt(x / 10)
    }
    return x == y || x == parseInt(y / 10)
};