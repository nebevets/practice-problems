const doMathCombos = (num1, num2)=>{
    const results = [];
    const ops = {
        '+': ()=>num1 + num2,
        '-': ()=>num1 - num2,
        '/': ()=>num1 / num2, 
        '*': ()=>num1 * num2  
    }
    for (var key in ops){
        results.push(`${num1}${key}${num2}=${ops[key]()}`);
    }
    return results;
}