function cocococombomath(num1, num2, num3, num4, num5){
    var result = 0;
    
    result = (num1 * num2);
    result += num3;
    result = result/num4;
    result -= num5;

    return result;
}

var test1 = {
    input: '3,2,6,3,5',
    expected: -1,
    actual: cocococombomath(3, 2, 6, 3, 5)
}