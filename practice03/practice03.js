var test1 = {
    input: ['hello', 34, true, false, 'goodbye', 56, 12, '25', true],
    expected: [['hello', 'goodbye', '25'], [34, 56, 12], [true, false, true]],
    actual: addDimensionToArray(['hello', 34, true, false, 'goodbye', 56, 12, '25', true])
};
var test2 = {
    input: [],
    expected: [[],[],[]],
    actual: addDimensionToArray([])
};
var test3 = {
    input: [undefined, undefined, null, ''],
    expected: [[''],[],[]],
    actual: addDimensionToArray([undefined, undefined, null, ''])
};

function addDimensionToArray(arrayOfAnything){
    var resultingArray = [], strings = [], numbers = [], bools = [];

    for (var index = 0; index < arrayOfAnything.length; index++){
        switch(typeof arrayOfAnything[index]){
            case 'string':
                strings.push(arrayOfAnything[index]);
                break;
            case 'number':
                numbers.push(arrayOfAnything[index]);
                break;
            case 'boolean':
                bools.push(arrayOfAnything[index]);
                break;
        }
    }
    resultingArray.push(strings, numbers, bools);
    return resultingArray;
}
console.log(test1, test2, test3);