const palindromes = function (str) {

    // forcer lowercase, split into single characters, filter alphanumeric characters to array
    const cleanedString = str.toLowerCase()
                             .split('')
                             .filter((item) => item.search(/[a-z0-9]/) === 0);

    // compare strings formed by array and reversed array
    return cleanedString.join('') === cleanedString.toReversed().join('');
};

console.log(palindromes('racr'));


// Do not edit below this line
module.exports = palindromes;
