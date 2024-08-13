const sumAll = function(low, high) {
    
    // error checks
    if (low < 0 || high < 0) return 'ERROR';
    if (Math.floor(low) !== low || Math.floor(high) !== high)
        return 'ERROR';
    
    // start is smaller than end
    let start = Math.min(low, high);
    let end = Math.max(low, high)


    // iterate start -> end and keep adding to sum
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
