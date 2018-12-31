function do_math(num1, num2, string){
    var operators = ['+', '-', '/', '*', 'x', 'X'];
    var operatorIndex = operators.indexOf(string);
    switch (operatorIndex){
        case 0:
            return parseFloat(num1) + parseFloat(num2);
        case 1:
            return parseFloat(num1) - parseFloat(num2);
        case 2:
            return parseFloat(num1) / parseFloat(num2);
        case 3:
        case 4:
        case 5:
            return parseFloat(num1) * parseFloat(num2);
        default:
            return 0;
    }
}

do_math(5, 2, '5');

const calc = (num1, num2, operator) => {
    if (num2 === 0 && operator === '/'){
        return 'divide by zero error';
    }
    const do_calc = {
        '+': num1 + num2,
        '-': num1 - num2,
        '/': num1 / num2,
        '*': num1 * num2,
        'x': num1 * num2,
        'X': num1 * num2
    }
    return do_calc[operator];
}