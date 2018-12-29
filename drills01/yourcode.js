
function sumArray(array){
	return array.reduce((total,item)=>total+=item);
}

function fitWithinVal(array, number){
    const result = [];
    let total = 0;
    for(var index = 0; index < array.length; index++){
        if (array[index]+total <= number){
            result.push(array[index]);
            total += array[index];
        }
    }
    return result;
}

function getAllNamesShorterThan(){

}

function makeLabel(){

}
