

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

function getCapitalCount(){

}

function correctCalcChecker(){

}

function doMath(){

}
