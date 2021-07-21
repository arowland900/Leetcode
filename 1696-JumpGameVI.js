// https://leetcode.com/problems/jump-game-vi/

var maxResult = function (nums, k) {
    if (nums.length == 1) return nums[0];

    let table = Array(nums.length)
    table[0] = nums[0]
    let q = [0]

    for (let i = 1; i < nums.length; i++) {

        while (q.length && q[0] < i - k) {
            q.shift()
        }

        table[i] = nums[i] + table[q[0]]

        while (q.length && table[i] >= table[q[q.length - 1]]) {
            q.pop()
        }

        q.push(i)
    }

    return table[table.length - 1]
};