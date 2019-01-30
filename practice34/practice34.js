function lcs(string1, string2){
    var result = '';

    if (string1.length > string2.length){
        var temp = string1;
        string1 = string2;
        string2 = temp;
    }

    for(var index = 0; index < string1.length; index++){
        var test = string2.indexOf(string1[index]);
        var newResult = '';
        if(test !== -1){
            newResult += string1[index];
            var nextLetter = 1;
            while(string1[index + nextLetter] && string1[index + nextLetter] === string2[test + nextLetter]){
                newResult += string1[index + nextLetter++];
            }
        }
        if(result.length < newResult.length){
            result = newResult;
        }
    }

    return result;
}