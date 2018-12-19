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

const newFindVowels = string => {
    const results = {};
    const vowels = /[AEIOUaeiou]+/;
    for(let letter = 0; letter < string.length; letter++){
        if (vowels.test(string[letter])){
            results[string[letter]] ? 
                results[string[letter]]++:
                results[string[letter]] = 1;
        }
    }
    return results;
}

console.log(newFindVowels("four score and seven years ago"));