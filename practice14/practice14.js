function arrayFactors(array){
    var output = {};
    function getFactors(number){
        var key = number;
        for(var i = 2; i <= number/2; i++){
            if (number % i === 0){
                output[key].push(i);
            }
        }
    }
    array.map((item)=>{
        if(!output[item]){
            output[item] = [];
            getFactors(item);
        }
    });
    return output;
}