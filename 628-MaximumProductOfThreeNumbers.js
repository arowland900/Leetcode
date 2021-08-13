// https://leetcode.com/problems/maximum-product-of-three-numbers/

var maximumProduct = function(nums) {
    if(nums.length == 3) {
        return nums.reduce((a,e) => a*=e)
    }
    nums = nums.sort((a,b) => Number(a) - Number(b))
    let n = nums.length 
    let left = nums[0] * nums[1] * nums[n-1]
    let right = nums[n-1] * nums[n-2] * nums[n-3]
    
    return Math.max(left, right)
    
};