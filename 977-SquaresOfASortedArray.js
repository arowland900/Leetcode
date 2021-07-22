// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function (nums) {
    let i = 0, j = nums.length - 1
    let arr = []

    while (i <= j) {
        let sq1 = Math.pow(nums[i], 2)
        let sq2 = Math.pow(nums[j], 2)

        sq1 > sq2 ? (arr.unshift(sq1), i++) : (arr.unshift(sq2), j--)

    }
    return arr
};