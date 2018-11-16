function alternate_caps(str){
    var lowerStr = str.toLowerCase();
    var result = lowerStr.split("");
    for (var index = 1; index < result.length; index+=2){
        result[index] = result[index].toUpperCase();
    }
    return result.join('');
}

function newAltCaps(str){
    var result = '';
    var offset = 32;
    for(var index = 0; index < str.length; index++){
        var tempChar = str[index].charCodeAt();
        if (index % 2 !== 0){
            if(tempChar >= 65 && tempChar <= 90){
                result += String.fromCharCode(tempChar + 32)
            }else if(tempChar >= 97 && tempChar <= 122){
                result += String.fromCharCode(tempChar - 32)
            }else{
                result += str[index];
            }
        }else{
            result += str[index];
        }
    }
    return result;
}

var test1 = {
    input: 'amazing',
    expected: 'aMaZiNg',
    actual: alternate_caps('amazing'),
    new: newAltCaps('amazing')
}
var test2 = {
    input: 'no, really amazing',
    expected: 'nO, rEaLlY AmAzInG',
    actual: alternate_caps('no, really amazing'),
    new: newAltCaps('no, really amazing')
}
console.log(test1, test2);