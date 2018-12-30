
function sumArray(array){
	return array.reduce((total,item)=>total+=item);
}

function fitWithinVal(array, number){
    const result = [];
    let total = 0, index =0;
    do{
        if (array[index]+total <= number){
            result.push(array[index]);
            total += array[index];
        }
        index++;
    }while(index < array.length && total < number);

    return result;
}

function getAllNamesShorterThan(array, length){
    return array.filter(item => item.length < length);
}

function makeLabel(person){
    return `${person.greeting} ${person.givenName} ${person.familyName}\n${person["home address"].streetNumber} ${person["home address"].streetName}\n${person["home address"].city}, ${person["home address"].state} ${person["home address"].zip}`;
}
