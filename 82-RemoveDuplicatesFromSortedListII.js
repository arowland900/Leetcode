// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

var deleteDuplicates = function(head) {
    if(!head) return null
    let sentinalHead = new ListNode(-200, head)
    
    let temp = sentinalHead
    let prev = new ListNode(-200)
    while(temp){
        let val = temp.val
        let skip = false
        while(temp.next && val == temp.next.val){
            prev.next = temp.next
            temp = temp.next
            skip = true
        }
        if(skip) prev.next = temp.next
        else prev = temp
        temp = temp.next
    }
    return sentinalHead.next
};