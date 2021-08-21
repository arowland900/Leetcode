// https://leetcode.com/problems/longest-increasing-subsequence/

// Tabulation Solution
var lengthOfLIS = function (nums) {
    let table = new Array(nums.length).fill(1)

    for (let i = 1; i < table.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                table[i] = Math.max(table[i], table[j] + 1)
            }
        }
    }

    return Math.max(...table)
};

// slight improvement
var lengthOfLIS = function (nums) {
    let sub = [nums[0]]

    for (let num of nums) {
        console.log(num)
        if (num > sub[sub.length - 1]) {
            sub.push(num)
        } else {
            let i = 0
            while (num > sub[i]) {
                i++
            }
            sub[i] = num
        }
    }

    return sub.length
};

// Binary Search
var lengthOfLIS = function (nums) {
    let sub = []
    for (let num of nums) {
        let left = 0, right = nums.length - 1
        while (left < right) {
            let mid = Math.floor((right + left) / 2)
            sub[mid] < num ? left = mid + 1 : right = mid
        }
        sub[left] = num
    }
    return sub.length
};