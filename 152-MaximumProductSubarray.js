// https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function (nums) {
    let largest = nums[0]

    for (let i = 0; i < nums.length; i++) {
        let acc = 1
        for (let j = i; j < nums.length; j++) {
            acc *= nums[j]
            largest = Math.max(largest, acc)
        }
    }

    return largest
};