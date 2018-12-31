function findMiddleOfString(aString){
    if (typeof aString !== 'string')
        return "not a string";
    var result = '';
    var middleIndex = Math.floor(aString.length/2);
    
    if (aString.length % 2 !== 0){
        return aString[middleIndex];
    }
    return aString[middleIndex - 1] + aString[middleIndex];
}

var test1 = {
    input: 'seven',
    output: findMiddleOfString('seven')
}
var test2 = {
    input: 'dish',
    output: findMiddleOfString('dish')
}

console.log(test1, test2);