// https://leetcode.com/problems/merge-two-sorted-lists/

// Solution 1: n = l1 length, m = l2 length.  TC: O(n + m), SC: O(1) due to pointers
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

// Better version of Solution 1 (same TC & SC, but less code)
var mergeTwoLists = function (l1, l2) {

    let head = new ListNode()
    let dummy = head

    while (l1 && l2) {
        if (l1.val < l2.val) {
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
    }

    dummy.next = l1 ? l1 : l2
    return head.next
};

// Recursive Solution:
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    else if (!l2) return l1
    else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};