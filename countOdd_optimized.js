var countOdds = function(low, high) {
    if (low>high) return 0;

    
    return Math.floor((high-low + 1 + (low%2)) / 2);
};

console.log(countOdds(0, 10000000));