// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function (head) {
    if (!head) return null

    let temp = head

    while (temp.next) {
        if (temp.val == temp.next.val) temp.next = temp.next.next
        else temp = temp.next
    }
    return head
};