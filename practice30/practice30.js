function random_range(start_num, end_num){
    var min, max;
    if (Array.isArray(start_num) && end_num === undefined){
        min = 0, max = start_num.length-1;
        return start_num[Math.floor(Math.random()* (max-min+1))+min];
    }
    min = start_num, max = end_num;
    return Math.floor(Math.random()* (max-min+1))+min;
}
console.log(random_range(2,15));
console.log(random_range(1,100));
console.log(random_range(['a','b','c','d','e']));