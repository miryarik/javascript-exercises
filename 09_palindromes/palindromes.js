const palindromes = function (inputStr) {

    // force str to lower-case
    let lowerStr = inputStr.toLowerCase();

    // array for str characters
    let charArray = [];

    // put only alphabetical characters into str
    for (let i = 0; i < lowerStr.length; i++)
        if (lowerStr[i].search(/[a-z0-9]/) === 0)
            charArray.push(lowerStr[i]);

    // reverse the splitted array
    let revArray = charArray.toReversed();

    // compare string formed by charArray and revArray    
    return (charArray.join("") === revArray.join(""));

};

// Do not edit below this line
module.exports = palindromes;
