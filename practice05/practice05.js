function fizzBuzz(){
    for (var num = 1; num <= 100; num++){
        if ((num % 5 == 0) && (num % 3 == 0)){
            console.log('fizzBuzz');
            continue;
        }else if (num % 5 == 0){
            console.log('buzz');
            continue;
        }else if (num % 3 == 0){
            console.log('fizz');
            continue;
        }
        console.log(num);
    }
}

fizzBuzz();