// https://leetcode.com/problems/palindrome-linked-list/

// array convert solution
var isPalindrome = function (head) {
    let arr = []
    let temp = head

    while (temp) {
        arr.push(temp.val)
        temp = temp.next
    }

    return arr.join('') == arr.reverse().join('')
};

// recursive flip solution
var isPalindrome = function (head) {
    let front = head

    function checkBackwards(current = head) {
        if (current) {
            let check = checkBackwards(current.next)
            if (check == false) return false
            if (front.val != current.val) return false
            front = front.next
        }
        return true
    }
    return checkBackwards()
};

