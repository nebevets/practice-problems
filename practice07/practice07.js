function translate(string){
    let result = [];
    let suffix = 'ay';
    const lookUpVowel = {
        a: 'a', e: 'e', i: 'i', o: 'o', u: 'u'
    }
    //let original = string;
    string = string.toLowerCase();
    const words = string.split(' ');
    
    for(word in words){
        let newWord;
        for(letter in words[word]){
            if(lookUpVowel[words[word][letter]]){
                newWord = words[word].substr(letter) + words[word].substr(0,letter) + suffix;
                result.push(newWord);
                break;
            }
        }
        if (!newWord){
            result.push(words[word]);
        }
    }
    return result.join(' ');
}