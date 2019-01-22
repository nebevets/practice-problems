function isWavePattern(numbers){
    let isWave = false;
    if(!Array.isArray(numbers)) return isWave;

    const sortedNumbers = numbers.slice();
    sortedNumbers.sort((a, b)=>a-b);
    
    let start = 0;
    let middle = Math.floor(sortedNumbers.length/2);
    
    do{
        isWave = sortedNumbers[start++] < sortedNumbers[middle++];
    }while(isWave && sortedNumbers[middle]);

    return isWave;
}
