const repeatString = function(str, times) {
   if (times < 0) return 'ERROR';

   let repeatedString = "";
   for (let i = 0; i < times; i++)
    repeatedString += str;
   return repeatedString;
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
