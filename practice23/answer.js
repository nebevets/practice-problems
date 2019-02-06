const find_factors = (dividend) => { 
    let divisor = 1, quotient;
    const divisors = [], quotients = [];

    if (dividend === 1 || dividend === 0) return [dividend];
    
    do{
        if(dividend % divisor === 0){
            quotient = dividend / divisor;
            divisors.push(divisor);
            quotients.unshift(quotient);
        }
        divisor++;
    }while(divisor < Math.abs(quotients[0]))

    return divisors.concat(quotients);
}