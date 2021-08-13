// https://leetcode.com/problems/product-of-array-except-self/

// Solution 1
var productExceptSelf = function (nums) {
    let left = [1], right = [1]

    for (let i = 0; i < nums.length - 1; i++) {
        left.push(left[left.length - 1] * nums[i])
        right.unshift(right[0] * nums[nums.length - 1 - i])
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i]
    }

    return nums
};

// Solution 2 (better space complexity)
var productExceptSelf = function (nums) {
    let answer = [1]

    for (let i = 1; i < nums.length; i++) {
        answer[i] = nums[i - 1] * answer[i - 1]
    }
    let r = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * r
        r *= nums[i]
    }

    return answer
};