// https://leetcode.com/problems/merge-intervals/

var merge = function (intervals) {
    intervals = intervals.sort((a, b) => Number(a[0]) - Number(b[0]))
    for (let i = 0; i < intervals.length - 1; i++) {
        let cur = intervals[i], next = intervals[i + 1]
        if (cur[1] >= next[0]) {
            if (cur[1] < next[1]) cur[1] = next[1]
            intervals.splice(i-- + 1, 1)
        }
    }
    return intervals
};