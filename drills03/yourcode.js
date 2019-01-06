function getPath(path){
    let folderNames = path.split('/');
    return folderNames;
}

function getPathParts(url){
    const regExURL = /^([FfIiLlEeHhTtPpSsMmAaOoDdRrCc]+):\/\/([A-Za-z_\.\-]+)?:?(\d{1,5})?([A-Za-z_\.\/\-]+)?/;
    if(!regExURL.test(url)){
        return 'error: please enter a properly formatted URL, including the protocol.'
    }
    const results = {};
    const parsedUrl = regExURL.exec(url);
    const keys = ['protocol', 'host', 'port', 'path'];
    keys.map((item,index)=>{
        if(parsedUrl[index+1]){
            results[item] = parsedUrl[index+1];
        }
    });
    if(results.path && parsedUrl[4]){
        results.path = results.path.substr(1, results.path.lastIndexOf('/') - 1);
        results.file = parsedUrl[4].substr(parsedUrl[4].lastIndexOf('/') + 1);
    }
    if(results.port){
        results.port = parseInt(results.port);
    }
    return results;
}

function getCapitalCount(words){
    if (!Array.isArray(words)){
        return 0;
    }
    const result = words.filter(item => {
        if(typeof item !== 'string'){
            return false;
        }
        return item[0] < item[0].toLowerCase();
    });
    return result.length;
}

function correctCalcChecker(equations){
    let results = [];
    results = equations.filter(item => {
        if (doMath(item.num1, item.num2, item.op) === item.result){
            return true;
        }
        return false;
    });
    return results;
}

function doMath(num1, num2, op){
    const operatorFunction = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '/': (num1, num2) => num1 / num2,
        '*': (num1, num2) => num1 * num2,
    }
    return operatorFunction[op](num1, num2);
}