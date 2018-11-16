function skippy_numbers(number){
    var results = [number, number+1];
    
    for (var index = 1; index < 4; index++){
        let newNum = results[results.length-1] + number;
        results.push(newNum, newNum+1);
    }
    return results;
}