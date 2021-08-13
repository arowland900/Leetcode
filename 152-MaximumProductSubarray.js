// https://leetcode.com/problems/maximum-product-subarray/

// Solution 1 TC O(n^2)
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

// Solution 2 TC O(n)
var maxProduct = function (nums) {
    if (!nums.length) return 0

    let largest = nums[0]
    let tMax = nums[0]
    let tMin = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let c = nums[i]
        let tempTMax = tMax
        tMax = Math.max(c, tMax * c, tMin * c)
        tMin = Math.min(c, tempTMax * c, tMin * c)

        largest = Math.max(tMax, largest)
    }

    return largest
};