// https://leetcode.com/problems/fibonacci-number/

// Tabulation TC: O(n) SC: O(n)
var fib = function (n) {
    let table = new Array(n + 1).fill(0)
    table[1] = 1
    for (let i = 2; i < n + 1; i++) {
        table[i] = table[i - 1] + table[i - 2]
    }

    return table[n]
};

// Recursion TC: O(2^n) SC: O(n)
var fib = function (n) {
    if (n < 2) return n

    return fib(n - 1) + fib(n - 2)
};

// Recursion with Memo TC: O(n) SC: o(n)
var fib = function (n, memo = {}) {
    if (memo[n]) return memo[n]
    if (n < 2) return n
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
};

// Iterative TC: O(n) SC: O(1)
var fib = function (n) {
    if (n < 2) return n
    let current = 0
    let prev = 1
    let twoPrev = 0

    for (let i = 2; i <= n; i++) {
        current = prev + twoPrev
        twoPrev = prev
        prev = current

    }
    return current
};
