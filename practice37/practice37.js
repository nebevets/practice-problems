function alternate_caps(str){
    var lowerStr = str.toLowerCase();
    var result = lowerStr.split("");
    for (var index = 1; index < result.length; index+=2){
        result[index] = result[index].toUpperCase();
    }
    return result.join('');
}

var test1 = {
    input: 'amazing',
    expected: 'aMaZiNg',
    actual: alternate_caps('amazing')
}
var test2 = {
    input: 'no, really amazing',
    expected: 'nO, rEaLlY AmAzInG',
    actual: alternate_caps('no, really amazing')
}
console.log(test1, test2);