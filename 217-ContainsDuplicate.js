// https://leetcode.com/problems/contains-duplicate/

// One liner solution
var containsDuplicate = function (nums) {
    return Array.from(new Set(nums)).length != nums.length
};

// faster solution
var containsDuplicate = function (nums) {
    let set = new Set()
    for (n of nums) {
        if (set.has(n)) return true
        else set.add(n)
    }
    return false
};