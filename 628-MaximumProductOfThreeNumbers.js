// https://leetcode.com/problems/maximum-product-of-three-numbers/

// Sorting Solution
var maximumProduct = function (nums) {
    if (nums.length == 3) {
        return nums.reduce((a, e) => a *= e)
    }
    nums = nums.sort((a, b) => Number(a) - Number(b))
    let n = nums.length
    let left = nums[0] * nums[1] * nums[n - 1]
    let right = nums[n - 1] * nums[n - 2] * nums[n - 3]

    return Math.max(left, right)

};

// Finding min & max values solution
var maximumProduct = function (nums) {
    if (nums.length == 3) {
        return nums.reduce((a, e) => a *= e)
    }

    let min1 = Infinity, min2 = Infinity
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity

    for (n of nums) {
        if (n <= min1) {
            min2 = min1
            min1 = n
        } else if (n <= min2) min2 = n
        if (n >= max1) {
            max3 = max2
            max2 = max1
            max1 = n
        } else if (n >= max2) {
            max3 = max2
            max2 = n
        } else if (n >= max3) max3 = n
    }


    return Math.max(min1 * min2 * max1, max1 * max2 * max3)

};