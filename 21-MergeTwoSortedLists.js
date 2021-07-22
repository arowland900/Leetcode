// https://leetcode.com/problems/merge-two-sorted-lists/

// Solution 1: n = l1 length, m = l2 length.  TC: O(n + m), SC: O(n + m)
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null
    else if (!l1) return l2
    else if (!l2) return l1

    let head = new ListNode()
    let dummy = head

    while (l1 && l2) {
        if (l1.val < l2.val) {
            dummy.val = l1.val
            l1 = l1.next
        } else {
            dummy.val = l2.val
            l2 = l2.next
        }
        if (l1 && l2) {
            dummy.next = new ListNode()
            dummy = dummy.next
        }

    }

    dummy.next = l1 ? l1 : l2

    return head
};