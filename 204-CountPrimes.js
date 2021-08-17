// https://leetcode.com/problems/count-primes/

// Solution 1 Sieve of Eratosthenes
var countPrimes = function (n) {
    if (n < 3) return 0

    let table = new Array(n).fill(true)

    table[1] = true

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (table[i] == false) continue
        for (let j = i * i; j < n; j += i)
            table[j] = false
    }

    return table.filter(e => e).length - 2

};