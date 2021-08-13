// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Recursive bin search
var findMin = function (arr) {

    if (arr.length == 1) return arr[0]

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    return Math.min(findMin(left), findMin(right))

};

// Iterative bin search
var findMin = function (nums) {

    if (nums.length == 1) return nums[0]

    let lo = 0, hi = nums.length - 1

    while (lo < hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
        if (nums[lo] < nums[hi]) {
            return nums[lo]
        }
        if (nums[mid] >= nums[lo]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return nums[lo]
};