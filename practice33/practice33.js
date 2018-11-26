function invert_negatives(num){
    var result = Number(num);
    if (isNaN(result)){
        return false;
    }
    if (result < 0){
        return Math.abs(result);
    }else{
        return -(result);
    }
}

var test1 = {
    input: -5,
    expected: 5,
    actual: invert_negatives(5)
};
var test2 = {
    input: 4000,
    expected: -4000,
    actual: invert_negatives(4000)
};
var test3 = {
    input: 'puppies',
    expected: false,
    actual: invert_negatives('puppies')
};
console.log(test1, test2, test3);