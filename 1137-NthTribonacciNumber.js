// https://leetcode.com/problems/n-th-tribonacci-number/

// Tabulation: TC: O(n), SC: O(n)
var tribonacci = function(n) {
    let table = new Array(n + 1).fill(0)
    
    table[1] = 1
    table[2] = 1
    
    for(let i = 3; i <= n; i++){
        table[i] = table[i-1] + table[i-2] + table[i-3]
    }
    
    return table[n]
};