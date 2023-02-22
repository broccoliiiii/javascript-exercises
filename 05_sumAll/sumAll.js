const sumAll = function(numberOne, numberTwo) {
    let answer = 0;
    if(numberOne <= -1 || numberTwo <= -1 || typeof numberOne != "number" || typeof numberTwo != "number"){
        return "ERROR";
    }else if(numberOne < numberTwo){
        for(let i = numberOne; i <= numberTwo; i++){
            answer += numberOne;
            numberOne++;
        }
        return answer;
    } else if(numberOne > numberTwo){
        for(let i = numberTwo; i <= numberOne; i++){
            answer += numberTwo;
            numberTwo++;
        }
        return answer;
    }
};

// Do not edit below this line
module.exports = sumAll;
