
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
