function lcs(string1, string2){
    var result = '';

    if (string1.length > string2.length){
        var temp = string1;
        string1 = string2;
        string2 = temp;
    }
    for(var index = 0; index < string1.length; index++){
        var found = string2.indexOf(string1[index]);
        while (found > -1){
            var newResult = string1[index];
            var nextLetter = 1;
            while(string1[index + nextLetter] && string1[index + nextLetter] === string2[found + nextLetter]){
                newResult += string1[index + nextLetter++];
            }
            if(result.length < newResult.length){
                result = newResult;
            }
            found = string2.indexOf(string1[index], ++found);
        }
    }

    return result;
}