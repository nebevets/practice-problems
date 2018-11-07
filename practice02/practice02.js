function arrayReverse(array){
    var result = [];
    for (var i = array.length-1; i >= 0; i--){
        result.push(array[i]);
    }
    return result;
}

var test1 = {
    input: ['hello', 45, 'Bob', 'what', '23'],
    expected: ['23', 'what', 'Bob', 45, 'hello'],
    actual: arrayReverse(['hello', 45, 'Bob', 'what', '23'])
};
var test2 = {
    input: [''],
    expected: [''],
    actual: arrayReverse([''])
};

console.log(test1, test2);