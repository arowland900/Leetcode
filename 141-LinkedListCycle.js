// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
    
    while(head){
        if(head.checked) return true
        head.checked = true
        head = head.next
    }
    return false
};