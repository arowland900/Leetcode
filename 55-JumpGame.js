// https://leetcode.com/problems/jump-game/


// Solution 1 (most effective) --> TC: O(n), SC: O(1)
var canJump = function (nums) {

    let n = nums.length - 1

    for (let i = n; i >= 0; i--) if (i + nums[i] >= n) n = i

    return !n
};

// Solution 2 
var canJump = function (nums) {
    if (nums.length == 1) return true

    let max = nums[0]

    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i])
        if (max >= nums.length - 1) return true
        if (nums[i] == 0 && max <= i) return false
    }
    return false
};