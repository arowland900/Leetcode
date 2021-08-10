// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/

var deleteDuplicatesUnsorted = function (head) {
    let map = {}
    let temp = head

    while (temp) {
        if (map[temp.val]) map[temp.val]++
        else map[temp.val] = 1
        temp = temp.next
    }

    let sentinal = new ListNode(0, head)
    temp = sentinal
    while (temp) {
        while (temp.next && map[temp.next.val] > 1) {
            temp.next = temp.next.next
        }
        temp = temp.next
    }

    return sentinal.next
};