const repeatString = function(baseString, repeat) {
    let repeatString = "";
    for(let i = 0; i<repeat; i++){
        repeatString += baseString;
    }
    if(repeat < 0)
    repeatString = "ERROR"
    return repeatString;
    
};

// Do not edit below this line
module.exports = repeatString;