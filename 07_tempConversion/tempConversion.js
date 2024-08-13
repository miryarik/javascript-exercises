const convertToCelsius = function(tempFarenheit) {
  let tempCelsius = ((tempFarenheit - 32) * 5 / 9).toFixed(1);
  return Number(tempCelsius);
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFarenheit = ((tempCelsius * 9 / 5) + 32).toFixed(1);
  return Number(tempFarenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
