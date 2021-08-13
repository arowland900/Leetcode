// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (arr) {

    if (arr.length == 1) return arr[0]

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    return Math.min(findMin(left), findMin(right))

};