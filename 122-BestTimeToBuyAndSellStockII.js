// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

var maxProfit = function(prices) {
    let tempMax = 0
    let profit = 0
    for(let i = 1; i < prices.length; i++){
        tempMax = prices[i] - prices[i-1]
        tempMax = Math.max(tempMax, 0)
        profit += tempMax
    }
        
    return profit
};