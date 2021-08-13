// https://leetcode.com/problems/maximum-subarray/

// Iterative Solution
var maxSubArray = function (nums) {

    let max = nums[0], currMax = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(currMax += nums[i], nums[i])
        max = Math.max(currMax, max)
    }

    return max
};

