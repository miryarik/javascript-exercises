const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numList) {
  let sum = 0;
    
  numList.forEach((num) => sum += num);

  return sum;
};

const multiply = function(numList) {
  let product = 1;

  numList.forEach((num) => product *= num);

  return product;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  
  else return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
