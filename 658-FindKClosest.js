// https://leetcode.com/problems/find-k-closest-elements/solution/

var findClosestElements = function (arr, k, x) {
    let left = 0, right = arr.length - k;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return arr.splice(left, k);
};