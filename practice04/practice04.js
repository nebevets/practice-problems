function sortStringsArray(strings){
    var sorted = false;
    while (sorted === false){
        sorted = true;
        var i = 0;
        while(strings[i+1] !== undefined){
            if(strings[i] > strings[i+1]){
                var temp = strings[i];
                strings[i] = strings[i+1];
                strings[i+1] = temp;
                sorted = false;
            }
            i++;
        }
    }
    return strings;
}

var test1 = {
    input: ['e', 'd', 'a', 'b', 'c'],
    expect: ['a', 'b', 'c', 'd', 'e'],
    actual: sortStringsArray(['e', 'd', 'a', 'b', 'c'])
}
var test2 = {
    input: ['mouse', 'cat', 'dog', 'human'],
    expect: ['cat', 'dog', 'human', 'mouse'],
    actual: sortStringsArray(['mouse', 'cat', 'dog', 'human'])
}
var test3 = {
    input: ['a', 'b'],
    expect: ['a', 'b'],
    actual: sortStringsArray(['a', 'b'])
}

console.log(test1, test2, test3);