// https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
    let table = new Array(amount+1).fill(Infinity)
    table[0] = 0
    
    for(let c of coins){
        for(let i = c; i < amount+1; i++){
            table[i] = Math.min(table[i], table[i-c] + 1)
        }
    }
    return table[table.length - 1] == Infinity ? -1 : table[table.length-1]
};