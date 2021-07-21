// https://leetcode.com/problems/jump-game/


// Solution 1 (most effective) --> TC: O(n), SC: O(1)
var canJump = function (nums) {

    let n = nums.length - 1

    for (let i = n; i >= 0; i--) if (i + nums[i] >= n) n = i

    return !n
};