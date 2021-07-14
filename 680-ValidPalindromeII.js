// https://leetcode.com/problems/valid-palindrome-ii/

var validPalindrome = function (s, miss = 0) {

    let start = 0, end = s.length - 1
    while (start < end) {
        if (s[start] != s[end]) {
            if (miss) return false

            let sub1 = s.substr(0, start) + s.substr(start + 1);
            let sub2 = s.substr(0, end) + s.substr(end + 1);

            return validPalindrome(sub1, miss = 1) || validPalindrome(sub2, miss = 1)
        }
        start++, end--
    }

    return true
};