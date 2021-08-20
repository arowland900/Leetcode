// https://leetcode.com/problems/climbing-stairs/submissions/

var climbStairs = function (n, steps = n, memo = {}) {
    if (memo[steps]) return memo[steps]
    if (steps == 0) return 1
    if (steps < 0) return 0

    memo[steps] = climbStairs(n, steps - 1, memo) + climbStairs(n, steps - 2, memo)

    return memo[steps]
};