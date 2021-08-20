// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

var maxProfit = function (prices) {
    let low = Infinity
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        let p = prices[i]
        if (p < low) low = p
        else if (p - low > profit) profit = p - low
    }
    return profit
};

var maxProfit = function(prices) {
    let max = 0
    let tempMax = 0
    for(let i = 1; i < prices.length; i++){
        tempMax += prices[i] - prices[i-1]
        tempMax = Math.max(tempMax, 0)
        max = Math.max(max, tempMax)
    }
    return max
};