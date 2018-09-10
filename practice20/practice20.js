function randomize_list(array){
    var results = [];
    while(array.length){
        var randomIndex = Math.floor(Math.random()*(array.length));
        results.push(array[randomIndex]);
        array.splice(randomIndex, 1);
    }
    return results;
}

console.log(randomize_list(['this', 'should', 'be', 'random', '!']));
console.log(randomize_list(['this', 'should', 'be', 'random', '!']));
console.log(randomize_list(['this', 'should', 'be', 'random', '!']));