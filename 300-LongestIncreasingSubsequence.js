// https://leetcode.com/problems/longest-increasing-subsequence/

// Tabulation Solution
var lengthOfLIS = function(nums) {
    let table = new Array(nums.length).fill(1)
    
    for(let i = 1; i < table.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                table[i] = Math.max(table[i], table[j]+1)
            } 
        } 
    }
    
    return Math.max(...table)
};