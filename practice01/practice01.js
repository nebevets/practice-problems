function biggerWords(string, arrayStrings){
    var result = [];
    for(let aString in arrayStrings){
        if(arrayStrings[aString].length > string.length){
            result.push(arrayStrings[aString]);
        }
    }
    return result;
}
var testArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
var testWord = 'whales';
console.log(biggerWords(testWord, testArray));