function fibSequence(number){
    number = Number(number);
    if (isNaN(number)){
        console.log("please provide a number.");
        return;
    }
    const results = [];
    let newFibNum = 0;
    while (results.length !== number){
        newFibNum = results[results.length-2] + results[results.length-1] || results.length;
        results.push(newFibNum);
    }
    return results.join(' ');
}