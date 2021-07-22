// https://leetcode.com/problems/merge-sorted-array/

// solution 1: TC: O(m) SC: O(1)
var merge = function (nums1, m, nums2, n) {
    let x = nums1.length
    nums1.splice(m, x - m)

    let i = 0, j = 0
    while (nums1.length < x) {
        if (nums1[i] < nums2[j]) i++
        else {
            nums1.splice(i, 0, nums2[j])
            j++
        }
    }
};

// Solution 2: TC: O(m), SC: O(1)
var merge = function (nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;

    while (j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
    }
};