// https://leetcode.com/problems/n-th-tribonacci-number/

// Tabulation: TC: O(n), SC: O(n)
var tribonacci = function (n) {
    let table = new Array(n + 1).fill(0)

    table[1] = 1
    table[2] = 1

    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2] + table[i - 3]
    }

    return table[n]
};

// Recursive Memo TC: O(n), SC: O(n)
var tribonacci = function (n, memo = {}) {
    if (memo[n]) return memo[n]
    if (n == 0) return 0
    if (n == 1 || n == 2) return 1

    memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo)
    return memo[n]

};

// Iterative TC: O(n) SC: O(1)
var tribonacci = function(n) {
    
    if(n == 0) return 0
    if(n == 1 || n == 2) return 1
    
    let a = 0,
        b = 1,
        c = 1,
        d = 0
    
    while(n > 2){
        d = a + b + c
        a = b
        b = c
        c = d
        
        n--
    }
    return d
    
};