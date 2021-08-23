// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
    let len = 0
    let dummy = head
    while(dummy){
        len++
        dummy = dummy.next
    }
    let x = len - n
    
    let sentinalHead = new ListNode(0, head)
    let temp = sentinalHead
    let i = 0
    while(temp){
        if(i == x){
            temp.next = temp.next.next
        }
        temp = temp.next
        i++
    }
    return sentinalHead.next
};