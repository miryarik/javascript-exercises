const fibonacci = function(n) {

    // force number
    n = Number(n);

    // handle 0 or 1
    if (n === 0 || n === 1) return n;

    // for above 1
    if (n > 1) return fibonacci(n - 1) + fibonacci(n - 2);

    else return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;
