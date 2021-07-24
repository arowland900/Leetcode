
// Iterative: TC O(n), SC O(1)
var reverseList = function(head){
    
    let prev = null, current = head
    
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}

// Recursive: TC O(n), SC O(n)
var reverseList = function(head) {
    
    if(head == null || head.next == null) return head
    
    let p = reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return p
    
};