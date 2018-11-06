function biggerWords(string, arrayStrings){
    const result = [];
    for(let aString in arrayStrings){
        if(arrayStrings[aString].length > string.length){
            result.push(arrayStrings[aString]);
        }
    }
    return result;
}