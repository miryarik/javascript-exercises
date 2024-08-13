const fibonacci = function(n) {
    
    // force n as number
    n = Number(n);

    // reject -ves
    if (n < 0)
        return 'OOPS';

    // hard-code for 0th term
    else if (n === 0)
        return 0;

    // hard-code for the 1st
    else if (n === 1) 
        return 1;
    
    // every other term is sum of the 2 terms before it
    else
        return (fibonacci(n - 1) + fibonacci(n - 2));
};

// Do not edit below this line
module.exports = fibonacci;
