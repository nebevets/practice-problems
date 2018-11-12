const bubbleSort = (array)=>{
    let sorted;
    do {
        sorted = true;
        let i = 0;
        while(array[i+1] !== undefined){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                sorted = false;
            }
            i++;
        }
    }while (!sorted);
    return array;
}

var test1 = {
    input: ['e', 'd', 'a', 'b', 'c'],
    expect: ['a', 'b', 'c', 'd', 'e'],
    actual: bubbleSort(['e', 'd', 'a', 'b', 'c'])
}
var test2 = {
    input: ['mouse', 'cat', 'dog', 'human'],
    expect: ['cat', 'dog', 'human', 'mouse'],
    actual: bubbleSort(['mouse', 'cat', 'dog', 'human'])
}
var test3 = {
    input: ['a', 'b'],
    expect: ['a', 'b'],
    actual: bubbleSort(['a', 'b'])
}

console.log(test1, test2, test3);