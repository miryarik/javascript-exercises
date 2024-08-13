const reverseString = function(str) {
    // begin from end of string,
    // copy the current character to reversedStr,
    // go down towards the first character of original string repeating the prev step

    let reversedString = "";
    for (let index = str.length - 1; index >= 0; index--) {
        reversedString += str.at(index)
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
