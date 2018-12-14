function romanizeNumber(number){
    var result = '';
    var romanNumerals = {
        '1000': 'M',
        '900': 'CM',
        '500': 'D',
        '400': 'CD',
        '100': 'C',
        '90': 'XC',
        '50': 'L',
        '40': 'XL',
        '10': 'X',
        '9': 'IX',
        '5': 'V',
        '4': 'IV',
        '1': 'I'
    }
    var divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var index = 0;
    while(number){
        var quotient = Math.floor(number / divisors[index]);
        if(quotient){
            result += romanNumerals[divisors[index].toString()].repeat(quotient);
            number = number % divisors[index];
        }
        index++;
    }
    return result;
}