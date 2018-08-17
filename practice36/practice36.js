function findVowels(string){
    var newString = '';
    var lookUpVowel = {
        a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'
    }
    for(var index = 0; index < string.length; index++){
        if (lookUpVowel.hasOwnProperty(string[index])){
            newString += string[index];
        }
    }
    return newString;
}

console.log(findVowels("four score and seven years ago"));