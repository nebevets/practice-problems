const addArrays = (first, second)=>{
    if(first.length < second.length){
        let temp = first.splice(0, first.length);
        first = second.splice(0, second.length);
        second = temp.splice(0, temp.length);
    }
    const totals = first.map((item, index) => item + (second[index] || 0));
    return totals;
}