// https://leetcode.com/problems/contains-duplicate-ii/submissions/

var containsNearbyDuplicate = function (nums, k) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i]
        if (map.has(n)) {
            if (i - map.get(n) <= k) return true
            else map.set(n, i)
        } else {
            map.set(n, i)
        }
    }
    return false
};