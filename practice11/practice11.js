function splitIntoOddEven(array){
    const result = {
        odd: [],
        even: []
    };
    array.map(item => {
        if(typeof item === 'number'){
            if (!result.even[item] && item % 2 === 0){
                result.even.push(item)
            }else if (!result.odd[item]){
                result.odd.push(item);
            }
        }
    });
    return result;
}

console.log(splitIntoOddEven([2,5,1,6,8,2,20,'cat',13,3]));