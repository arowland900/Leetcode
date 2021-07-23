// https://leetcode.com/problems/add-bold-tag-in-string/

var addBoldTag = function (s, words) {

    let check = Array(s.length).fill(false)
    for (w of words) {
        let i = s.indexOf(w)
        while (i > -1) {
            let j = i + w.length
            for (let x = i; x < j; x++) {
                check[x] = true
            }
            i = s.indexOf(w, i + 1)
        }
    }

    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (check[i] && !check[i - 1]) res += `<b>`
        res += s[i]
        if (check[i] && !check[i + 1]) res += `</b>`
    }
    return res

};