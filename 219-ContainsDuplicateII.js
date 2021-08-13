// https://leetcode.com/problems/contains-duplicate-ii/submissions/

// Solution 1
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

// Solution 2
var containsNearbyDuplicate = function (nums, k) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true
        set.add(nums[i])
        if (set.size > k) set.delete(nums[i - k])
    }
    return false
};