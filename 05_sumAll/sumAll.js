const sumAll = function(int1, int2) {
    if(typeof int1 !== "number" || int1 < 0 ||typeof int2 !== "number" || int2 < 0)
    return "ERROR";
    let sumAll = 0;
    let start = int1;
    let end = int2;

    if(int1 > int2){
    start = int2;
    end =int1;
    }

    for(let index = start; index<= end; index++){
    sumAll += index;
    }
    return sumAll
};

// Do not edit below this line
module.exports = sumAll;
