

function countOccurences(words, word){
    let result = 0;
    words.map(item => {
        if(item === word){
            result++;
        }
    });
    return result;
}

function wordLengths(words){
    const result = [];
    words.map(item => {
        result.push(item.length);
    });
    return result;
}

function getMinMaxMean(numbers){
    if (!numbers.length){
        return;
    }
    const result = {
        min: null,
        max: null,
        mean: null
    };
    const sorted = numbers.sort( (a, b) => a - b);
    result.min = sorted[0];
    result.max = sorted[sorted.length - 1];
    let total = numbers.reduce((total, num) => total += num);
    result.mean = total/numbers.length;
    return result;
}

function findMode(numbers){
    if (!numbers.length) return;
    let result = numbers[0], maxCount = 1;
    const totals = {};
    numbers.map(item => {
        if(totals[item.toString()]){
            totals[item]++;
            if(totals[item] >= maxCount){
                maxCount = totals[item];
                result = item;
            }
        }else{
            totals[item.toString()] = 1;
        }
    });
    return parseInt(result);
}
