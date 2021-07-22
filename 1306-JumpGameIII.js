// https://leetcode.com/problems/jump-game-iii/

// DFS Solution
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

// BFS Solution
var canReach = function (arr, start) {
    let q = [start]

    while (q.length) {
        let value = q.shift()

        if (arr[value] == 0) return true
        if (arr[value] < 0) continue

        let options = [value - arr[value], value + arr[value]]

        for (let num of options) {
            if (num >= 0 && num < arr.length) q.push(num)
        }
        arr[value] = -arr[value]
    }

    return false
};