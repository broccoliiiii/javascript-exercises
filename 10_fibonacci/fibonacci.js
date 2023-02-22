const fibonacci = function(number) {
    let a = 0;
    let b = 1;
    let c;

    if(number < 0){
        return "OOPS";
    }

    for(let i = 1; i < number; i++){
        c = b;
        b = a + b;
        a = c;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
