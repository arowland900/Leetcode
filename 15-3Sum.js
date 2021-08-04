// https://leetcode.com/problems/3sum/

var threeSum = function (nums) {
    let res = [], map = new Map()
    nums = nums.sort((a, b) => Number(a) - Number(b))

    for (let i = 0; i < nums.length; i++) {
        let p = nums[i]
        if (p > 0) break
        if (map.has(p)) continue
        map.set(p, true)

        let innerMap = new Map()
        let low = i + 1, high = nums.length - 1
        while (low < high) {
            if (p + nums[low] + nums[high] == 0) {
                let arr = [p, nums[low], nums[high]]
                if (!innerMap.has(arr.toString())) res.push(arr)
                innerMap.set(arr.toString())
                low++
                high--
            }
            else if (p + nums[low] + nums[high] > 0) high--
            else low++
        }
    }

    return res
};