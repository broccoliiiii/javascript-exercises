const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function(array) {
  let sum = 0;
	for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let sum = array[0];
	for(let i = 1; i < array.length; i++){
    sum *= array[i];
  }
  return sum;
};

const power = function(numOne, numTwo) {
	return Math.pow(numOne, numTwo);
};

const factorial = function(num) {
	if(num < 0){
    return "ERROR";
  }else if(num === 0){
    return 1;
  }else{
    let factorial = 1;
    for(let i = 1; i <= num; i++){
      factorial *= i;
    }
    return factorial;
  }
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
