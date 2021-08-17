// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Solution 1 
var findKthLargest = function (nums, k) {
    return nums.sort((a, b) => Number(b) - Number(a))[k - 1]
};