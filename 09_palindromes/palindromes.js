const palindromes = function (string) {
    // string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let newString = string.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ").toLowerCase().split(" ").join("");
    let reverseString = newString.split("").reverse().join("");

    if(newString == reverseString){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
