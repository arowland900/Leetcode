// https://leetcode.com/problems/pascals-triangle/

var generate = function (numRows) {
    let arr = [[1]]

    for (let i = 1; i < numRows; i++) {
        let x = new Array(i + 1)
        x[0] = 1, x[x.length - 1] = 1

        for (let j = 1; j < x.length - 1; j++) {
            x[j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }

        arr[i] = x
    }
    return arr
};