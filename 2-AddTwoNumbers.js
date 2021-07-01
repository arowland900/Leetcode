// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
    let total = 0, rem = 0
    let res = new ListNode(0)
    let dummy = res

    while (l1 || l2 || total) {
        if (l1) total += l1.val, l1 = l1.next
        if (l2) total += l2.val, l2 = l2.next
        if (total >= 10) rem = 1, total = total - 10

        dummy.next = new ListNode(total)
        dummy = dummy.next
        total = rem
        rem = 0
    }

    return res.next
};