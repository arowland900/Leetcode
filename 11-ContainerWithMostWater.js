// https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {

    var area = (a, b) => Math.min(height[a], height[b]) * (b - a)

    let i = 0, j = height.length - 1
    let max = area(i, j)

    while (i < j) {
        height[i] > height[j] ? j-- : i++
        max = max > area(i, j) ? max : area(i, j)
    }

    return max
};