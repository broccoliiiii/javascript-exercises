const convertToCelsius = function(temp) {
  // console.log(Math.round(((temp - 32) / 1.8) * 10) / 10);
  return Math.round(((temp - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  // console.log(Math.round(((temp * (9/5)) + 32) * 10) / 10);
  return Math.round(((temp * (9/5)) + 32) * 10) / 10;
};

// convertToCelsius(100);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
