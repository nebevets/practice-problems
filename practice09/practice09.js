function findLettersInWords(letters, words){
    const result = [];
    let found;
    for (let word in words){
        found = false;
        for (let letter in letters){
            if (words[word].indexOf(letters[letter]) === -1){
                found = false;
                break;
            }
            found = true;
        }
        if(found){
            result.push(words[word]);
        }
    }
    return result;
}

const nowInES6 = (letters, words) => {
    if(!letters) return [];
    const result = words.filter(word => {
        for (let letter in letters){
            if (word.indexOf(letters[letter]) === -1){
                return;
            }
        }
        return word;
    });
    return result;
}