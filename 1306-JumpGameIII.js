// https://leetcode.com/problems/jump-game-iii/

var canReach = function (arr, start) {

    if (0 <= start && start <= arr.length && arr[start] >= 0) {
        if (arr[start] == 0) return true
        let less = start - arr[start]
        let more = start + arr[start]
        arr[start] = -arr[start]
        return canReach(arr, less) || canReach(arr, more)
    }

    return false
};