// https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function (head) {
    let arr = []
    let temp = head

    while (temp) {
        arr.push(temp.val)
        temp = temp.next
    }

    return arr.join('') == arr.reverse().join('')
};