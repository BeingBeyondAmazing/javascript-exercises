const removeFromArray = function() {
    let array = arguments[0];

    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<arguments.length; j++){
            if(array[i]===arguments[j]){
                array.splice(i,1);
                i--;
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

/** test('removes multiple values', () => {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  }); */