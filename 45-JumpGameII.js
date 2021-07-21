// https://leetcode.com/problems/jump-game-ii/

var jump = function (nums) {

    let jumps = 0
    let currentJumpEnd = 0
    let farthest = 0

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(i + nums[i], farthest)
        if (i == currentJumpEnd) {
            jumps++
            currentJumpEnd = farthest
            if (farthest >= nums.length - 1) return jumps
        }
    }
    return jumps
};