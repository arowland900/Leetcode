// https://leetcode.com/problems/pascals-triangle-ii/

// Solution 1
var getRow = function (rowIndex) {
    let table = [[1]]

    for (let i = 1; i <= rowIndex; i++) {
        let row = new Array(i + 1)
        row[0] = 1, row[row.length - 1] = 1
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = table[i - 1][j - 1] + table[i - 1][j]
        }
        table[i] = row
    }

    return table[rowIndex]
};

// Solution 2
var getRow = function (rowIndex) {

    let row = [1]

    for (let i = 0; i < rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            row[j] += row[j - 1]
        }
        row.push(1)
    }

    return row
};