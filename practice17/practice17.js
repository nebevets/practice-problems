/*

for the number of times specified:


*/


function skippy_numbers(number, array, length){
    var result = array || [];
    var length = length || 8;
    
    for (var index = 0; index < number; index++){
        result.push(number+index);
    }
    if (result.length < length){
        skippy_numbers(number, result, length);
    }
    return result;
}