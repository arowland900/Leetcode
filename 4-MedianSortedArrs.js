// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
    let arr = []

    while (nums1.length && nums2.length) {
        nums1[0] < nums2[0]
            ? arr.push(nums1.shift())
            : arr.push(nums2.shift())
    }

    let x = nums1.concat(nums2)
    let y = arr.concat(x)
    let m = Math.floor(y.length / 2)

    return y.length % 2 ? y[m] : parseFloat((y[m] + y[m - 1]) / 2)

};